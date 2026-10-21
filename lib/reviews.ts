export type ClientReview = {
  id: string;
  reviewer: string;
  body: string;
  source: string;
};

// Approved, first-party review records mirrored from the StealthAgents Google
// review dataset. Copy is kept verbatim apart from whitespace normalization.
export const stealthAgentsReviews: ClientReview[] = [
  {
    id: 'chad-sublet',
    reviewer: 'Chad Sublet',
    body: 'I recently started working with Stealth Agents and honestly couldn’t be more impressed. I had never used a VA before, so I didn’t really know what to expect, but Lindsay has been incredible. She handles a lot of the tactical work, which has freed me up to focus on bigger-picture initiatives and be way more productive. Definitely looking forward to a long relationship with them.',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pOTlRqVkxiSGR6YTBsalVqWkdla0pFY0RsTU1rRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOjNNTjVLbHdza0ljUjZGekJEcDlMMkE%7C%7C?hl=en-US'
  },
  {
    id: 'austin-rampt',
    reviewer: 'Austin Rampt',
    body: 'These guys have been wonderful. Kate our VA has been a huge asset to our company. Would recommend Stealth Agents to anyone in need of a VA company',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twMll6Z3RORXh4U1dvM1RWRmxTMk5VTlc1V1prRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOkp2YzgtNExxSWo3TVFlS2NUNW5WZkE%7C%7C?hl=en-US'
  },
  {
    id: 'robert-jones',
    reviewer: 'Robert Jones',
    body: 'I have been working with Stealth Agents for the past few months. This is my first experience with a VA and I wish I found them earlier. I am thrilled with the results I am getting and I highly recommend Stealth Agents!',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGV05USjNXV2ROWmtGUFkyaHhOblpoVmxkMVJFRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOjFWNTJ3WWdNZkFPY2hxNnZhVld1REE%7C%7C?hl=en-US'
  },
  {
    id: 'rich-cochran',
    reviewer: 'Rich Cochran',
    body: 'We have enjoyed working with Stealth and their VEA (named Evy). They are pros, and we especially appreciate how diligent and pleasant Evy is!',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25JeWRsWkNTR2xsZDNVdFEzcEhVM3BLTVcxd1VXYxAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOnIydlZCSGlld3UtQ3pHU3pKMW1wUWc%7C%7C?hl=en-US'
  },
  {
    id: 'jessica-dickey',
    reviewer: 'Jessica Dickey',
    body: 'Absolutely amazing company to work with! Heart was so organized, kind, and very patient as she taught me the processes and sheets she created for us. She went above and beyond to help make sure our transition was smooth from start to finish. I would highly recommend Stealth Agents to any business or company!!',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJM2g0ZG5LX05mN3FRRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CIHM0ogKEI3h4dnK_Nf7qQE%7C%7C?hl=en-US'
  },
  {
    id: 'chavonne-ayers',
    reviewer: 'Chavonne Ayers',
    body: 'I have been working with the Stealth Agents for almost year now and have had a wonderful experience. I am always pleased with the VAs customer service and overall professionalism. My team has made it easy to meet our project deadlines and go above and beyond to complete extra task. I will be working with Stealth Agents for future projects.',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNMcHJfTEZnEAE!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CIHM0ogKEICAgICLpr_LFg%7C%7C?hl=en-US'
  },
  {
    id: 'gemma-bulos',
    reviewer: 'Gemma Bulos',
    body: 'The VA that Stealth Agents found for me was fantastic! She was conscientious, communicative, a self-starter, and needed very little direction. I really appreciated the work Stealth Agents did to find her for us.',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5SFNtOVJMWEk1VEVSUmN6ZDZRblpHUW1kWVMxRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOl9HSm9RLXI5TERRczd6QnZGQmdYS1E%7C%7C?hl=en-US'
  },
  {
    id: 'suleania-bryant',
    reviewer: 'Suleania Bryant',
    body: 'My Stealth Agents team has been amazing for my business. Their goal is to see my business grow and succeed and its evident in the quality of work that they provide. My Stealth Agents team has really given me back the time that I need to work on my business while they work in my business.',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNSeV9IUTlnRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CIHM0ogKEICAgICRy_HQ9gE%7C%7C?hl=en-US'
  },
  {
    id: 'gabriel-alexander',
    reviewer: 'Gabriel Alexander',
    body: 'Great experience from our VA and our CM! Very responsive and dedicated team.',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20wNE9XUjJUbGhIVjBoVWJVOUxaVTV4TUZkaVJsRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOm04OWR2TlhHV0hUbU9LZU5xMFdiRlE%7C%7C?hl=en-US'
  },
  {
    id: 'anne-fredriksson',
    reviewer: 'Anne Fredriksson',
    body: 'I have been working with Stealth Agents for the past month. I have been very pleased with the quality of work, responsiveness, and professionalism exhibited by our VA. I look forward to a long term relationship!',
    source: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR1c3VMVG13RRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CIHM0ogKEICAgIDusuLTmwE%7C%7C?hl=en-US'
  }
];
