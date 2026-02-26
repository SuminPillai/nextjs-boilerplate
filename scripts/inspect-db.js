const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function inspect() {
    console.log("Inspecting SQL Server Database...");
    try {
        // Raw query to list all tables
        const tables = await prisma.$queryRaw`
      SELECT t.name AS TableName, s.name AS SchemaName, p.rows AS RowCounts
      FROM sys.tables t
      INNER JOIN sys.indexes i ON t.object_id = i.object_id
      INNER JOIN sys.partitions p ON i.object_id = p.object_id AND i.index_id = p.index_id
      INNER JOIN sys.schemas s ON t.schema_id = s.schema_id
      WHERE t.is_ms_shipped = 0
      GROUP BY t.name, s.name, p.rows
      ORDER BY t.name;
    `;

        console.table(tables);
    } catch (e) {
        console.error("Error inspecting DB:", e);
    } finally {
        await prisma.$disconnect();
    }
}

inspect();
