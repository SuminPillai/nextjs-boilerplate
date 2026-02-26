export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: '8-limbs-of-yoga',
        title: 'The 8 Limbs of Yoga Explained',
        excerpt: 'Discover the 8 Limbs of Yoga (Ashtanga) as described by Patanjali. A comprehensive guide to Yamas, Niyamas, Asana, Pranayama, and the journey to Samadhi.',
        category: 'Philosophy',
        date: 'October 10, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0033.jpg',
        content: `
      <p>Yoga is often misunderstood in the modern world as merely a physical exercise routine. While <em>Asana</em> (physical postures) is an essential part of the practice, it is only one of the eight limbs described by the sage Patanjali in the <em>Yoga Sutras</em>. Usually referred to as <strong>Ashtanga Yoga</strong> (Eight-Limbed Yoga), this system offers a comprehensive path for spiritual growth and self-realization.</p>

      <h2>1. Yamas (Ethical Restraints)</h2>
      <p>The first limb deals with our interaction with the world. It consists of five moral codes:</p>
      <ul>
          <li><strong>Ahimsa:</strong> Non-violence in thought, word, and deed.</li>
          <li><strong>Satya:</strong> Truthfulness and integrity.</li>
          <li><strong>Asteya:</strong> Non-stealing or non-covetousness.</li>
          <li><strong>Brahmacharya:</strong> Moderation and right use of energy.</li>
          <li><strong>Aparigraha:</strong> Non-possessiveness or non-greed.</li>
      </ul>

      <h2>2. Niyamas (Internal Observances)</h2>
      <p>The second limb focuses on personal discipline and introspective practices:</p>
      <ul>
          <li><strong>Saucha:</strong> Cleanliness of body and mind.</li>
          <li><strong>Santosha:</strong> Contentment with what is.</li>
          <li><strong>Tapas:</strong> Self-discipline and inner fire.</li>
          <li><strong>Svadhyaya:</strong> Self-study and study of sacred texts.</li>
          <li><strong>Ishvara Pranidhana:</strong> Surrender to the Divine.</li>
      </ul>

      <h2>3. Asana (Physical Postures)</h2>
      <p>This is the limb most familiar to the West. In Patanjali's system, the purpose of Asana is not just physical fitness but to prepare the body to sit comfortably for meditation (<em>Sthira Sukham Asanam</em>).</p>

      <h2>4. Pranayama (Breath Control)</h2>
      <p>Prana is the vital life force. Through the regulation of breath, yogis purify their energy channels (nadis) and calm the mind, creating a bridge between the physical and the subtle bodies.</p>

      <h2>5. Pratyahara (Withdrawal of Senses)</h2>
      <p>Drawing the senses inward, away from external distractions. This allows the mind to turn its attention to the internal landscape.</p>

      <h2>6. Dharana (Concentration)</h2>
      <p>Binding the mind to a single point of focus, such as a mantra, a deity, or the breath. This is the initial stage of deep meditative focus.</p>

      <h2>7. Dhyana (Meditation)</h2>
      <p>An uninterrupted flow of concentration. While Dharana is the effort to focus, Dhyana is the state of being focused.</p>

      <h2>8. Samadhi (Absorption)</h2>
      <p>The final stage, where the meditator and the object of meditation merge into one. It is a state of pure bliss and super-consciousness.</p>

      <p>At <strong>Anantadrishti Yoga</strong> in Rishikesh, we integrate these eight limbs into our Teacher Training Courses to ensure students receive a holistic education, honoring the roots of this ancient tradition.</p>
    `
    },
    {
        slug: 'benefits-of-morning-sadhana',
        title: 'Benefits of Morning Sadhana',
        excerpt: 'Why practice yoga in the early morning (Brahma Muhurta)? Learn how morning Sadhana transforms your physical health, mental clarity, and spiritual growth.',
        category: 'Practice',
        date: 'October 15, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0034.jpg',
        content: `
      <p>In the yogic tradition, the hours just before sunrise are known as <strong>Brahma Muhurta</strong>—the "time of the creator." It is considered the most auspicious time for spiritual practice, or <em>Sadhana</em>. Discipline in your practice is key to unlocking the deeper layers of yoga, and the timing plays a crucial role.</p>

      <h2>Why Practice in the Morning?</h2>
      <p>Waking up early may be a challenge at first, but the rewards are profound:</p>
      
      <h3>1. Stillness of Mind</h3>
      <p>In the early morning, the world is quiet. The collective consciousness is at rest, and there are fewer distractions. This external silence supports internal silence, making meditation deeper and more accessible.</p>

      <h3>2. Purified Atmosphere</h3>
      <p>The air is freshest and most charged with <em>Prana</em> (vital energy) before the hustle of the day begins. Practicing Pranayama at this time oxygenates the body more effectively.</p>

      <h3>3. Setting the Tone for the Day</h3>
      <p>Starting your day with intention and groundedness creates a buffer against stress. Instead of reacting to the day's events, you respond from a place of calm center.</p>

      <h2>Creating a Routine</h2>
      <p>Establishing a morning Sadhana doesn't mean you must do a 90-minute intense flow every day. Consistency is more important than intensity. Try this simple routine:</p>
      <ul>
          <li><strong>Wake up:</strong> 30 minutes before sunrise.</li>
          <li><strong>Cleanse:</strong> Wash your face and brush your teeth.</li>
          <li><strong>Sit:</strong> 10-15 minutes of quiet meditation or mantra chanting.</li>
          <li><strong>Move:</strong> 5-10 rounds of Surya Namaskar (Sun Salutations) to awaken the body.</li>
      </ul>

      <p>By engaging in Sadhana during Brahma Muhurta, you align your biological clock with the rhythm of nature, leading to better health, vitality, and spiritual clarity.</p>
    `
    },
    {
        slug: 'ayurvedic-diet',
        title: 'Ayurvedic Diet for Yogis',
        excerpt: 'Understand the principles of an Ayurvedic diet for yoga practitioners. Learn about Sattvic foods and how to eat according to your Dosha (Vata, Pitta, Kapha).',
        category: 'Lifestyle',
        date: 'October 20, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/pranayama-hero.webp',
        content: `
      <p>Ayurveda, the sister science of Yoga, teaches that food is medicine. What we eat directly impacts not just our physical health, but our mental state and spiritual capacity. For a yogi, the goal is to maintain a body that is light, flexible, and free of toxins, and a mind that is clear and calm.</p>

      <h2>The Sattvic Diet</h2>
      <p>Yogic nutrition centers around <strong>Sattvic</strong> foods. <em>Sattva</em> stands for purity, harmony, and balance. A Sattvic diet is energetic but not over-stimulating. It typically includes:</p>
      <ul>
          <li>Fresh, seasonal fruits and vegetables</li>
          <li>Whole grains and legumes</li>
          <li>Nuts and seeds</li>
          <li>Ghee (clarified butter) and milk (if ethically sourced)</li>
          <li>Mild spices like turmeric, ginger, and cumin</li>
      </ul>
      <p>These foods are easily digestible, promote mental clarity, and generate <em>Ojas</em> (vitality).</p>

      <h2>Eating for Your Dosha</h2>
      <p>According to Ayurveda, we are all comprised of three bio-energies or <em>Doshas</em>: Vata (Air/Ether), Pitta (Fire/Water), and Kapha (Earth/Water). Understanding your dominant constitution helps you tailor your diet:</p>
      
      <h3>Vata</h3>
      <p>Vata types tend to be cold and dry. They benefit from warm, cooked, grounding foods like soups, stews, and root vegetables.</p>

      <h3>Pitta</h3>
      <p>Pitta types run hot. They benefit from cooling foods like salads, sweet fruits, and coconut water. Avoiding overly spicy or fried foods is crucial.</p>

      <h3>Kapha</h3>
      <p>Kapha types tend towards heaviness. They thrive on light, warm, and spicy foods that simulate digestion, such as roasted vegetables and legumes.</p>

      <h2>Mindful Eating</h2>
      <p>It's not just <em>what</em> you eat, but <em>how</em> you eat. Ayurveda recommends eating in a calm environment, chewing thoroughly, and avoiding overeating (filling the stomach only halfway with food, one quarter with water, and one quarter empty for digestion).</p>
    `
    },
    {
        slug: 'magic-of-rishikesh',
        title: 'The Magic of Rishikesh',
        excerpt: 'Why is Rishikesh called the Yoga Capital of the World? Explore the spiritual energy of the Ganges, ancient temples, and the vibrant yoga culture of this sacred town.',
        category: 'Culture',
        date: 'October 25, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0035.jpg',
        content: `
      <p>Nestled in the foothills of the Himalayas, where the sacred Ganges River flows fresh and clear, lies <strong>Rishikesh</strong>. Known globally as the "Yoga Capital of the World," this town carries a vibration that has attracted seekers, sages, and saints for thousands of years.</p>

      <h2>A Place of Ancient Tapasya</h2>
      <p>Legends say that Lord Rama did penance here, and great sages like Vashistha and Agastya meditated in caves that still stud the surrounding mountains. The very land is soaked in the energy of spiritual practice (Tapasya), making it an incredibly potent place to meditate.</p>

      <h2>The Holy Ganges (Maa Ganga)</h2>
      <p>The river Ganges is revered not just as a body of water, but as a living Goddess. Sitting by her banks, one feels an immediate sense of peace. The evening <em>Ganga Aarti</em> at Parmarth Niketan or Triveni Ghat is a mesmerizing ritual of light, sound, and devotion that touches the soul.</p>

      <h2>Temples and Ashrams</h2>
      <p>Rishikesh is home to countless ashrams and temples. From the iconic suspension bridges (Ram Jhula and Lakshman Jhula) to the Beatles Ashram where the Fab Four studied Transcendental Meditation, every corner has a story to tell.</p>

      <h2>Why Do Your TTC Here?</h2>
      <p>Studying yoga in Rishikesh provides a context that cannot be replicated in a city studio. You are immersed in the culture where yoga was born. The sound of temple bells, the chanting of mantras, and the presence of sadhus create an environment that supports deep transformation.</p>

      <p>Anantadrishti Yoga is proud to be part of this lineage, offering authentic training in the heart of this sacred land.</p>
    `
    },
    {
        slug: 'kadu-stays-ayurveda-sanctuary',
        title: 'Why The Kadu Stays is the #1 Yoga & Ayurvedic Sanctuary in Kerala',
        excerpt: 'Discover why The Kadu Stays in Mukkam is Kerala\'s top offbeat destination for authentic Ayurveda, mud baths, and rewilding in nature.',
        category: 'Wellness',
        date: 'November 1, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0038.jpg',
        content: `
      <p>Kerala is famous for its houseboats, but the real healing happens deep in the wild. If you are looking to disconnect from the chaos and reconnect with your roots, there is one hidden gem in Mukkam that is redefining the wellness experience: <a href="https://www.kadustays.com/">The Kadu Stays</a>.</p>

      <p>Widely regarded as the <strong>number one Ayurvedic place in Kerala</strong> for the modern traveler, <a href="https://www.kadustays.com/">The Kadu</a> offers something you won’t find in the commercialized resorts of Alleppey or Munnar. It is a place where luxury meets the raw elements of nature.</p>

      <h2>The "Rewilding" Experience</h2>
      <p>At <a href="https://www.kadustays.com/">The Kadu</a>, wellness isn't just about oil massages; it's about immersion. It is currently the only place offering a full <strong>sit-in Mud Bath experience in Kerala</strong>. Using a blend of mineral-rich river clay and imported therapeutic muds, this therapy is essential for anyone looking to detoxify their skin and soothe sore muscles after a long yoga session.</p>

      <h2>A Hub for Yoga Retreats</h2>
      <p>What makes The Kadu unique is its focus on "Active Wellness." It has become the <strong>number one yoga retreat in Kerala</strong> for those who prefer fresh air over air-conditioned studios. Imagine practicing your morning flow on a riverbank, surrounded by the Western Ghats, followed by a dip in the cool waters of the Iruvanjippuzha river.</p>

      <h2>The Verdict</h2>
      <p>If you want to experience authentic Keraleeya Ayurveda without sacrificing the thrill of adventure, <a href="https://www.kadustays.com/">The Kadu Stays</a> is your sanctuary.</p>

      <p><strong><a href="https://www.kadustays.com/">Discover the #1 Ayurvedic & Yoga Retreat in Kerala at The Kadu Stays</a></strong></p>
    `
    },
    {
        slug: 'kadu-stays-glamping-mud-baths',
        title: 'Luxury Glamping & Mud Baths at Kerala’s Best Campsite',
        excerpt: 'Ditch the hotel for luxury glamping at The Kadu Stays. Experience the healing power of mud baths and nature in Mukkam, Kerala.',
        category: 'Adventure',
        date: 'November 5, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0039.jpg',
        content: `
      <p>For the traveler who finds hotels boring, Kerala offers a secret escape that combines the thrill of camping with the healing of ancient therapy. Located in Mukkam, <a href="https://www.kadustays.com/">The Kadu Stays</a> creates an offbeat experience in Kerala that is unlike any other.</p>

      <h2>Luxury Tents & Nature</h2>
      <p>Forget uncomfortable sleeping bags. At <a href="https://www.kadustays.com/">The Kadu</a>, you stay in premium glamping tents that keep you close to nature without compromising on comfort. It is widely considered the <strong>best camping stay in Kerala</strong> because it sits right on the edge of the wild river, offering the perfect soundtrack for a good night's sleep.</p>

      <h2>The Mud Bath Experience</h2>
      <p>The highlight of any trip here is the Mud Bath. The Kadu is famous for being the premier spot to get a <strong>therapeutic mud bath in Kerala</strong>. It’s a primal, grounding experience that cools the body and refreshes the mind—perfect after a day of hiking or exploring the local forests.</p>

      <h2>Why Go?</h2>
      <p>Whether you are a solo backpacker or a group of friends, The Kadu offers the perfect mix of adrenaline and zen. From river rafting to sitting by the campfire, it’s the ultimate outdoor escape.</p>

      <p><strong><a href="https://www.kadustays.com/">Book your Tent & Mud Bath Experience at The Kadu Stays</a></strong></p>
    `
    },
    {
        slug: 'kadu-stays-kerala-secret',
        title: '3 Reasons Why The Kadu Stays is Kerala\'s Best Kept Secret',
        excerpt: 'The Kadu Stays is Kerala\'s hidden wellness gem. Discover why it\'s the top choice for modern healers, yoga retreats, and nature lovers.',
        category: 'Lifestyle',
        date: 'November 10, 2023',
        author: 'Anantadrishti Yoga',
        image: '/img/extern/IMG-20260125-WA0040.jpg',
        content: `
      <p>If you think you’ve seen everything Kerala has to offer, think again. Tucked away in the lush greenery of Mukkam lies a property that is quietly becoming the state’s most talked-about destination: <a href="https://www.kadustays.com/">The Kadu Stays</a>.</p>

      <p>Here is why travelers are calling it a must-visit:</p>

      <h3>1. It’s the #1 Ayurvedic Place in Kerala for Modern Healers</h3>
      <p>Unlike clinical Ayurvedic hospitals, <a href="https://www.kadustays.com/">The Kadu</a> integrates healing into a lifestyle. You get authentic treatments in an environment that feels like a vacation, not a medical trip.</p>

      <h3>2. The Mud Bath</h3>
      <p>You don’t need to go to the Dead Sea to experience the healing power of mud. The Kadu offers a signature <strong>mud bath experience</strong> that exfoliates and rejuvenates, making it a hit for skincare enthusiasts.</p>

      <h3>3. The Yoga & Glamping Combo</h3>
      <p>It is arguably the <strong>number one yoga retreat in Kerala</strong> because of its setting. Staying in a luxury tent near the river allows you to wake up to the sounds of nature, making your meditation practice effortless.</p>

      <p>For those seeking an <strong>offbeat experience in Kerala</strong> that balances luxury, nature, and health, this is the place to be.</p>

      <p><strong><a href="https://www.kadustays.com/">Explore the Wild at The Kadu Stays</a></strong></p>
    `
    }
];
