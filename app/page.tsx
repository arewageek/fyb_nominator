"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { addNomination } from "@/actions/candidate";
import { useRouter } from "next/navigation";
// import { PaystackButton } from "react-paystack";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface Nomination {
  id: number;
  nominee: string;
  category: string;
  quantity: number;
}

interface NomineeProfile {
  id: string;
  name: string;
  fullName: string;
  nickname: string;
  dateOfBirth: string;
  department: string;
  nfcsSociety: string;
  bestLevel: string;
  funMoment: string;
  bio: string;
  stressfulLevel: string;
  stateOrTribe: string;
  hobby: string;
  relationshipStatus: string;
  forumPaddy: string;
  forumCrush: string;
  bibleVerse: string;
  favQuote: string;
  favSlang: string;
  japaOrStay: string;
  skill: string;
  partingWords: string;
  imageUrl: string;
}

export default function page() {
  // State management
  const publicKey = "pk_test_3b6e94ac5b62d8c69226a481d857d1cd089d9c67";
  // const publicKey = "pk_live_89db03b5c537e2ad9aa8ff358a56dc7d9a95f9ec";
  const [nominee, setNominee] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [viewingProfile, setViewingProfile] = useState<NomineeProfile | null>(
    null
  );
  //paystack
  const router = useRouter();
  const componentProps = {
    amount,
    email,
    publicKey,
    text: "Make Payment",
    onSuccess: () => {
      handlePaymentSuccess();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const handlePaymentSuccess = () => {
    nominations.map((nom) => {
      // console.log(nom.nominee);
      // const
      addNomination(nom.nominee, nom.category, nom.quantity.toString());
    });
    setNominations([]);
  };

  // //firestore
  // const [votesSnapshot, votesLoading, votesError] = useCollection(
  //   collection(db, "votes"),
  //   {}
  // );

  // if (!votesLoading && votesSnapshot) {
  //   votesSnapshot.docs.map((doc) => console.log(doc.data));
  // }

  // const [ title, setTitle ] = useEffect<string>("");

  // const [teacher, setTeacher] = useState([]);

  // useEffect(() => {
  //   const teacherRef = ref(database, "Teacher");
  //   get(teacherRef).then((snapshot) => {
  //     if(snapshot.exists()){
  //       const teacherArray = Object.entries(snapshot.val()).map(([id, data]) => ([
  //         id,
  //         ...data,
  //       ]));
  //       setTeacher(teacherArray);
  //     }
  //   })

  // });

  // Sample data - replace with your actual data
  const nominees = [
    {
      id: "1",
      name: "Boniface Padawasha",
      fullName: "Boniface Padawasha",
      nickname: "Bald hair",
      dateOfBirth: "4/14",
      department: "Electrical Electronic Engineering",
      nfcsSociety: "Legion of Mary",
      bestLevel: "200",
      funMoment: "Nfcs week",
      bio: "Nil",
      stressfulLevel: "300",
      stateOrTribe: "Niger state, Gbagyi",
      hobby: "Movies and reading novels",
      relationshipStatus: "In a relationship",
      forumPaddy: "Nil",
      forumCrush: "Nil",
      bibleVerse: "He asked us to be still, that He is God.",
      favQuote: "In Mary our mother, we succeed.",
      favSlang: "Nil",
      japaOrStay: "Stay",
      skill: "Tailor",
      partingWords: "God is faithful",
      imageUrl:
        "https://drive.google.com/open?id=1Hjko_tsn1ql2X4jMH1QrXBZ4QjJ5B_Sd",
    },
    {
      id: "2",
      name: "Sabastine Ngohile Felicia",
      fullName: "Sabastine Ngohile Felicia",
      nickname: "LICIA",
      dateOfBirth: "12/9",
      department: "Science Education",
      nfcsSociety: "Altar knight",
      bestLevel: "400l",
      funMoment: "After exams",
      bio: "I’m a creative thinker and a passionate individual with the love of learning 🧚🏻‍♀️",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state ( TIV)",
      hobby: "Cooking, music, movies",
      relationshipStatus: "In a relationship",
      forumPaddy: "TINA",
      forumCrush: "UFOMADU STEPHEN",
      bibleVerse:
        "Philippians 4:13. I can do all things through Christ who strengthens me",
      favQuote: "Que sera sera",
      favSlang: "Na God dy run am",
      japaOrStay: "Stay",
      skill: "Caterer",
      partingWords: "Put God first In everything you do and stay focused",
      imageUrl:
        "https://drive.google.com/open?id=1WVh6cQZ8VbDpbamaC1K2EESqowzfs-0Q",
    },
    {
      id: "3",
      name: "Linus Justina",
      fullName: "Linus Justina",
      nickname: "Tina",
      dateOfBirth: "1/11",
      department: "Science education",
      nfcsSociety: "Alter night",
      bestLevel: "400l",
      funMoment: "With my friends",
      bio: "A curious and enthusiastic individual with a thirst for knowledge",
      stressfulLevel: "500l",
      stateOrTribe: "Cross River State/ ogoja",
      hobby: "Love listening to music",
      relationshipStatus: "In a relationship",
      forumPaddy: "Licia",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4 : 19",
      favQuote: "Be the change you wish to see",
      favSlang: "What God can't do doesn't exist",
      japaOrStay: "Japa",
      skill: "Fashion designer",
      partingWords: `"The future belongs to those who believe in the beauty of their dreams".`,
      imageUrl:
        "https://drive.google.com/open?id=1sUb3rRUoIS0B6J1IpWA7WpkfAjGvd_03",
    },
    {
      id: "4",
      name: "Haamnaan John Haamnaan",
      fullName: "Haamnaan John Haamnaan",
      nickname: "Joe.zee",
      dateOfBirth: "11/5",
      department: "Telecommunication Engineering",
      nfcsSociety: "Legion of Marry",
      bestLevel: "400",
      funMoment: "Every Sunday.",
      bio: "Just a chill guy .",
      stressfulLevel: "300",
      stateOrTribe: "Plateau State",
      hobby: "Creating , being alone ..",
      relationshipStatus: "Single",
      forumPaddy: "Stev.",
      forumCrush: "Next please..",
      bibleVerse: "Isaiah 54 : 7",
      favQuote: "You are God Delivery system to your world",
      favSlang: "On God",
      japaOrStay: "Stay",
      skill: "Shoe cobbler",
      partingWords: "Good luck",
      imageUrl:
        "https://drive.google.com/open?id=1omvlVnenkPA0bFgMoIxpg1E8pX2eTaee",
    },
    {
      id: "5",
      name: "Uwakwe Joy Chisom",
      fullName: "Uwakwe Joy Chisom",
      nickname: "Sohmie",
      dateOfBirth: "1/14",
      department: "Agric Economics and farm management",
      nfcsSociety: "St. Vincent de Paul, legion",
      bestLevel: "200",
      funMoment: "With Exquisite family",
      bio: "I’m Sohmie, the quiet creative behind Sohmie’s Makeover, a hair and makeup brand built on passion, precision, and a love for helping people feel like the best version of themselves. I’m a bit of an introvert, but when it comes to beauty, I let my work speak louder than words. From bridal glam to everyday elegance, I pour my heart into every brushstroke and style. Sohmie’s Makeover is more than a business it’s my way of serving people with calm energy, creativity, and care.",
      stressfulLevel: "500",
      stateOrTribe: "Enugu- Igbo",
      hobby: "Working out, Reading and sleeping",
      relationshipStatus: "Single",
      forumPaddy: "Emmanuel, Michael, Esther, Doris, Chizzy, Onume",
      forumCrush: "You",
      bibleVerse: "Pilippians 4:13",
      favQuote: "Que sera, sera",
      favSlang: "🤔🤔",
      japaOrStay: "Japa",
      skill:
        "Makeup artist, Hairstylist(braiding, installation),cluster lashes",
      partingWords:
        "Push through the end, so it doesn’t feel like a repeat of the past.",
      imageUrl:
        "https://drive.google.com/open?id=1FQ-AVZRVWH57xDBFdtXAjViBVQK2aGYa",
    },
    {
      id: "6",
      name: "John oche samuel",
      fullName: "John oche samuel",
      nickname: "Oche",
      dateOfBirth: "6/20",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "200l and 400l",
      funMoment:
        "All the Exquisite picnics i have attended and on NFCS week day where i won Mr NFCS",
      bio: "I am an eazy go person, i smile alot, believe in God, i believe in consistency and hardwork and i take pride in my appearance and i have good sense of style which I think reflect my personality.",
      stressfulLevel: "300l and 500l",
      stateOrTribe: "Benue state/ Idoma",
      hobby: "Working out, Reading, researching and listening to music",
      relationshipStatus: "In a relationship",
      forumPaddy: "Investor Johnito",
      forumCrush: "Nil",
      bibleVerse: "Samuel 16:7",
      favQuote: "Be the change you want to see in the society",
      favSlang: "They play, just the play",
      japaOrStay: "Stay",
      skill: "I am a phone technician and phone accessory dealer",
      partingWords:
        "Build a good relationships network, and nurture your connections. You will need them in your future endeavors.",
      imageUrl:
        "https://drive.google.com/open?id=11PbHlM7by0_rj9nQxRAqgrCUItF1mAKf",
    },
    {
      id: "7",
      name: "PaulLuis Joseph Bazekore",
      fullName: "PaulLuis Joseph Bazekore",
      nickname: "the.real.Pluis",
      dateOfBirth: "3/8",
      department: "ARCHITECTURE",
      nfcsSociety: "Sacred Heart Choir",
      bestLevel: "300level",
      funMoment: "NFCS week 2022",
      bio: "Effortlessly cool, An essential realist and Awesomely great.",
      stressfulLevel: "100level",
      stateOrTribe: "Niger state/Gbagyi",
      hobby: "Singing, Drawing and sport",
      relationshipStatus: "Single",
      forumPaddy: "Good number of persons are...",
      forumCrush: "Nil",
      bibleVerse: "Jeremiah 29 vs 11",
      favQuote: "Breathe. It's only a bad day, not a bad life. -Ashley purdy",
      favSlang: "Steeze wey no reflect God, composure na zero.",
      japaOrStay: "Stay",
      skill: "Dynamic Entrepreneur",
      partingWords:
        "Stay hungry, stay humble, keep striving and keep, learning your time is coming.",
      imageUrl:
        "https://drive.google.com/open?id=1mrPFqyQ8NFygwsKkyqYpokyXFfW5gfkh",
    },
    {
      id: "8",
      name: "Ochaje Emmanuel Adoche",
      fullName: "Ochaje Emmanuel Adoche",
      nickname: "Adoche",
      dateOfBirth: "7/5",
      department: "Chemical engineering",
      nfcsSociety: "Jtl",
      bestLevel: "500l",
      funMoment: "Every moment with Exquisite family",
      bio: "Introverted, you don't want to find out. ",
      stressfulLevel: "300l",
      stateOrTribe: "Benue, Idoma",
      hobby: "Reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Michael",
      forumCrush: "Vincent",
      bibleVerse: "Psalms 25:4",
      favQuote: "Drink plenty water.",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Seminary",
      partingWords: "Talk to God in prayer. Work harder, nobody cares. ",
      imageUrl:
        "https://drive.google.com/open?id=1b6IM6RS6Fs7282LT0XbJHJ_Sl3zxCPKP",
    },
    {
      id: "9",
      name: "Araga Peace Ahuoyiza",
      fullName: "Araga Peace Ahuoyiza",
      nickname: "",
      dateOfBirth: "6/4",
      department: "Biochemistry",
      nfcsSociety: "Sacred Heart Choir",
      bestLevel: "400L",
      funMoment: "NFCS week activities",
      bio: 'I’m someone who’s passionate about writing, and I enjoy learning, meeting new people, and taking on new challenges. I’m always open to growth and exploring new opportunities."',
      stressfulLevel: "300L",
      stateOrTribe: "Kogi/Ebira",
      hobby: "Cooking, Watching movies, and Sleeping 🥱",
      relationshipStatus: "In a relationship",
      forumPaddy: "Happiness",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4:7",
      favQuote: "",
      favSlang: "Ohh wow",
      japaOrStay: "Japa",
      skill: "I'm just a girl",
      partingWords:
        '"Be curious", keep learning, help each other grow, and don’t fear to make mistakes ,because we often learn more from failure than from success',
      imageUrl:
        "https://drive.google.com/open?id=11im1aaXEe9m0URJX6pBnGt6832Fjdhq5",
    },
    {
      id: "10",
      name: "Okeh Francis Chimaroke",
      fullName: "Okeh Francis Chimaroke",
      nickname: "Okazaki😂",
      dateOfBirth: "9/26",
      department: "Biological Sciences",
      nfcsSociety: "Choir",
      bestLevel: "200L-500L",
      funMoment: "Forum picnic, bosso edition",
      bio: "A music enthusiast(Igbo highlife)with a great sense of humor",
      stressfulLevel: "300L",
      stateOrTribe: "Enugu State(O42)/Igbo",
      hobby: "Football, musical instruments etc",
      relationshipStatus: "Single",
      forumPaddy: "Faustie",
      forumCrush: "Chinonye🤭",
      bibleVerse:
        "Philippians 4 vs 13 I can do all things through Christ who strengthens me",
      favQuote: "A true ability is undisturbed by a pretentious criticism",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Playing musical instruments",
      partingWords:
        "Success isn't a result of spontaneous Combustion, you must set yourself on fire🔥 ..F...O...C...U...S",
      imageUrl:
        "https://drive.google.com/open?id=1d_2YiVNRSUp3RpuOWn-fgwOnbL4MCd3N",
    },
    {
      id: "11",
      name: "Ifenkwe David Nereus Chukwuemeka",
      fullName: "Ifenkwe David Nereus Chukwuemeka",
      nickname: "",
      dateOfBirth: "12/3",
      department: "Urban And Regional Planning",
      nfcsSociety: "Nil",
      bestLevel: "200l",
      funMoment: "Building of the church",
      bio: "Just me!!!",
      stressfulLevel: "400l",
      stateOrTribe: "Abia/ Igbo",
      hobby: "Football",
      relationshipStatus: "Single",
      forumPaddy: "Moses",
      forumCrush: "Nil",
      bibleVerse: "Romans 12 v 21",
      favQuote: "The journey of a thousand miles begins with a step",
      favSlang: '*God dey!!!,no wahala "',
      japaOrStay: "Stay",
      skill: "Football , Drawing and painting",
      partingWords: '"Just keep pushing forward "',
      imageUrl:
        "https://drive.google.com/open?id=1wnZ7pxTNK3zTN2KP26BWJA5KGg0_Br2V",
    },
    {
      id: "12",
      name: "Francis Doris Ojone",
      fullName: "Francis Doris Ojone",
      nickname: "Light of the world 🌎",
      dateOfBirth: "8/2",
      department: "Water resources aquaculture and fisheries technology",
      nfcsSociety: "Lectors",
      bestLevel: "400l",
      funMoment: "When I’m with exquisite family",
      bio: "If you know you know 💯I don’t like stress",
      stressfulLevel: "300l /500l",
      stateOrTribe: "Kogi",
      hobby: "Dancing, music, catching cruise & anything fun",
      relationshipStatus: "Single",
      forumPaddy: "Them chock",
      forumCrush: "All my guysss",
      bibleVerse: "Isaiah 60-22",
      favQuote: "Life is what happens when you’re making other plans",
      favSlang: "Omo / keep playing",
      japaOrStay: "Stay",
      skill: "Hair stylist, clothing and beauty",
      partingWords: "Take life serious but don’t kill your, avoid stress",
      imageUrl:
        "https://drive.google.com/open?id=1yUoToTgQlF4-j0oSN5qQmXHcXmNXOKnU",
    },
    {
      id: "13",
      name: "Anyaegbu, Chizoba Assumpta",
      fullName: "Anyaegbu, Chizoba Assumpta",
      nickname: "Chizzy",
      dateOfBirth: "8/14",
      department: "Crop Production",
      nfcsSociety: "Lectors and Legion of Mary",
      bestLevel: "300 level",
      funMoment: "Hanging out with exquisite members and my girls😊",
      bio: "I am a practical, hands-on and open-minded person with a strong ambition to build a better life for myself while helping others along the way.\nI enjoy exploring new ideas, expressing creativity and solving problems thoughtfully. My goal is to achieve financial independence early, and I'm ready to take bold, purposeful steps to make that happen 😊\n",
      stressfulLevel: "500 level",
      stateOrTribe: "Anambra State / Igbo",
      hobby: "Reading, watching movies and learning new things.",
      relationshipStatus: "Single",
      forumPaddy: "Mary, Esther, Doris, Faith, Michael, Emmanuel and Gucho",
      forumCrush: "Nil",
      bibleVerse: "Habakkuk 2 verse 3",
      favQuote:
        "Forget what lies behind and strain forward to what lies ahead.",
      favSlang: "God dey",
      japaOrStay: "Japa",
      skill:
        "Artistry (Writing, Drawing and Makeup), listening skill and Oriflame ambassador.",
      partingWords: "Never give up. Know what you want, get it and get out.",
      imageUrl:
        "https://drive.google.com/open?id=1Et3qD2RYChdG5sahqltlhJn7pNJ42NyL",
    },
    {
      id: "14",
      name: "Ugbajeh Jude Ojonugwa",
      fullName: "Ugbajeh Jude Ojonugwa",
      nickname: "Akachukwu",
      dateOfBirth: "5/31",
      department: "Quantity Surveying",
      nfcsSociety: "Member",
      bestLevel: "400 level",
      funMoment: "Solemity Of Christ The King",
      bio: "\"I'm Jude Ojonugwa Ugbajeh, a final-year Quantity Surveying student,With a strong academic foundation. I'm passionate about construction management,cost optimization and ensuring construction projects are delivered on time and within budget. I'm excited to apply my skills and knowledge to make a positive impact in the industry.\"\n",
      stressfulLevel: "200 Level",
      stateOrTribe: "Kogi/Igala",
      hobby: "Listening to Music and Cooking",
      relationshipStatus: "In a relationship",
      forumPaddy: "Sadoma/Ibrahim Labu(Twenty)",
      forumCrush: "Nil",
      bibleVerse: "Psalm 70",
      favQuote: "Hustle, Loyalty And Respect",
      favSlang: "YOU DY WYN!",
      japaOrStay: "Japa",
      skill: "Fish Farming",
      partingWords:
        "Time we tell but first Keep your head up, foucs and try to be the best of your kind. ",
      imageUrl:
        "https://drive.google.com/open?id=1XI62JMdEXofYxlHHcECAsAwAEYyoYDtr",
    },
    {
      id: "15",
      name: "Happiness Simon",
      fullName: "Happiness Simon",
      nickname: "Princess",
      dateOfBirth: "1/15",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "400l",
      funMoment: "With Exquisite family",
      bio: "Simple and easy going",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state",
      hobby: "Cooking and reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Abutu Emmy, Aluta Joeboy & Osas",
      forumCrush: "Nil",
      bibleVerse: "Psalm 121",
      favQuote:
        "Beautiful things happens when you distance yourself from negativity",
      favSlang: "On God",
      japaOrStay: "Japa",
      skill: "Hairstylist",
      partingWords: "Keep pushing..",
      imageUrl:
        "https://drive.google.com/open?id=1zi0N58JoKCbF3j0r689sVsZYSzlyg7bX",
    },
    {
      id: "16",
      name: "Ameh Regina Gracious",
      fullName: "Ameh Regina Gracious",
      nickname: "Sparklin-Grace",
      dateOfBirth: "11/29",
      department: "Biochemistry",
      nfcsSociety: "Legion/CCRN",
      bestLevel: "500l",
      funMoment: "300L exquisite family picnic",
      bio: "Standing tall at 5'11, I'm a child of God, a basketball enthusiast, and a model-like lady with a soft heart. I'm grateful for the journey that has brought me to this milestone, and I'm excited to celebrate with my loved ones!",
      stressfulLevel: "300L",
      stateOrTribe: "Benue state",
      hobby:
        "Singing, alone time, playing basketball, eating and having fun with my paddies.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Jovita aka JoJo ❤️",
      forumCrush: "Nil",
      bibleVerse: "Philippians 1 vs 6",
      favQuote: "What is worth doing, is worth doing well.",
      favSlang: "Oh chim! No be lie Sha😂",
      japaOrStay: "Stay",
      skill: "Graphics designer/ business woman",
      partingWords:
        "Always remember to put God first, Remember, He's the author and He has the manual for your life, He knows the exact paths that leads to the fulfillment of your purpose.",
      imageUrl:
        "https://drive.google.com/open?id=1lBHkwz6PN2Bt5wqkvnXneSK7EeDWe3VR",
    },
    {
      id: "17",
      name: "Adama Benedict Unubi",
      fullName: "Adama Benedict Unubi",
      nickname: "Hertz",
      dateOfBirth: "1/16",
      department: "Chemistry",
      nfcsSociety: "Nill",
      bestLevel: "300",
      funMoment: "Graduation day",
      bio: "Cool , calm and collected",
      stressfulLevel: "500",
      stateOrTribe: "Kogi/Igala",
      hobby: "Football",
      relationshipStatus: "Single",
      forumPaddy: "Peter",
      forumCrush: "One cute lil mama",
      bibleVerse: "Jeremiah 29:11",
      favQuote: "Let them hate , as long as they fear.",
      favSlang: "No worry, if e clear e go clear",
      japaOrStay: "Japa",
      skill: "Financial adviser",
      partingWords:
        "Believe and trust in God, believe in your abilities and strengths. Everything will work out just fine",
      imageUrl:
        "https://drive.google.com/open?id=17EMDW3hOABGOqdvARriCiUOm_JhomHDS",
    },
    {
      id: "18",
      name: "Otokpa Peter Joseph",
      fullName: "Otokpa Peter Joseph",
      nickname: "RockBliz",
      dateOfBirth: "12/28",
      department: "CHEMISTRY",
      nfcsSociety: "SHC, AND JTL",
      bestLevel: "300 LEVEL",
      funMoment: "FORUM MEETINGS AND 400 LEVEL GET TOGETHER",
      bio: "DISCIPLINED,FOCUSED, DETERMINED....\n",
      stressfulLevel: "400 LEVEL",
      stateOrTribe: "BENUE/IDOMA",
      hobby: "READING,SORTING OF INTERNET AND WATCHING MOVIES",
      relationshipStatus: "In a relationship",
      forumPaddy: "DEM PLENTY",
      forumCrush: "HMMM",
      bibleVerse: "Philippians 4:13",
      favQuote:
        "FOR YOU TO GET TO YOUR DESTINATION,YOU MOST GIVE A DESTINATION",
      favSlang: "OMOOO....ON GOD",
      japaOrStay: "Japa",
      skill: "ELECTRICIAN",
      partingWords: "DON'T ALLOW ANYONE TO DEFINE YOU....",
      imageUrl:
        "https://drive.google.com/open?id=1sBE-RWG0rjWUm4BwdRDikfOQq4wngjdu",
    },
    {
      id: "19",
      name: "Alphonsus Victor",
      fullName: "Alphonsus Victor",
      nickname: "~Sirvic",
      dateOfBirth: "12/20",
      department: "Science Education",
      nfcsSociety: "Forum",
      bestLevel: "500",
      funMoment: "Nill",
      bio: "I'm someone who loves learning new things, meeting people, and making a difference wherever I can.\n",
      stressfulLevel: "300",
      stateOrTribe: "Enugu / Igbo",
      hobby: "Playing football and reading",
      relationshipStatus: "In a relationship",
      forumPaddy: "Joeboy",
      forumCrush: "Nill",
      bibleVerse:
        "Philippians 4:13 “I can do all things through Christ who strengthens me.",
      favQuote: "Don’t be afraid to give up the good to go for the great",
      favSlang: "Trust the process",
      japaOrStay: "Japa",
      skill: "Online hustle",
      partingWords: "Anything worth doing is worth doing well",
      imageUrl:
        "https://drive.google.com/open?id=1X9Nhr1IbCZZLacph5s9dGFeT0ub5Q1lg",
    },
    {
      id: "20",
      name: "Thomas Kambai Stephen",
      fullName: "Thomas Kambai Stephen",
      nickname: "Mettle/Toma",
      dateOfBirth: "9/18",
      department: "Mechatronics Engineering",
      nfcsSociety: "Divine Mercy",
      bestLevel: "400 level",
      funMoment: "None in particular. Anytime I am laughing.",
      bio: "I am a very funny and Intelligent guy that hails from the Moroa tribe in Kaduna State. A foodie that appreciates good food; my favourite been pounded yam and egusi. I love music and playing sports. I have a passion for anything tech and consider myself an ambivert. Enjoy hanging out with people who have good sense of humor and diplomatic. Just an overall cool guy.",
      stressfulLevel: "300 level",
      stateOrTribe: "Kaduna/ Moroa",
      hobby: "Playing sports and listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Vince",
      forumCrush: "None",
      bibleVerse: "I don forget sef",
      favQuote: "Life na Jeje",
      favSlang: "Omo",
      japaOrStay: "Stay",
      skill: "Coding",
      partingWords:
        "Make sure your primary purpose for coming FUT is achieved and make your parents proud.",
      imageUrl:
        "https://drive.google.com/open?id=1hnVJtf_aEB4LHRpsXGUcdtktUsGTMilu",
    },
    {
      id: "21",
      name: "Iweobi Joyce chidalu",
      fullName: "Iweobi Joyce chidalu",
      nickname: "Nil",
      dateOfBirth: "1/6",
      department: "Crop Production",
      nfcsSociety: "NFCS Brigade, church warden, legion of mary",
      bestLevel: "300 level",
      funMoment: "Whenever am with my clique",
      bio: "Just a girl who is compassionate and outspoken who advocates for others and provides support for those in need, passionate about humanitarian work and making a positive impact. Who Enjoy Playing and watching football, value dedication and commitment, and cherish meaningful friendships. ",
      stressfulLevel: "200 level",
      stateOrTribe: "Imo",
      hobby:
        "Watching sports, listening to music , taking pictures and videos of every moments",
      relationshipStatus: "Single",
      forumPaddy: "Saratu doma, Adekemi faustina and mary ogbadoyi",
      forumCrush: "Nil",
      bibleVerse: "Philippians 4 :13",
      favQuote: "It's not about the starting point, but the finish line.",
      favSlang: "Hope dey!",
      japaOrStay: "Stay",
      skill: "Business oriented",
      partingWords:
        "In all you do please put God first, believe in yourself and your abilities, choose what works for you and put in your very best in it, lastly do not quite because you started badly, you can still make a good result with the little time left.",
      imageUrl:
        "https://drive.google.com/open?id=1R-75dBd0SfkVlCrsMCyhx25JOhyKnhH4",
    },
    {
      id: "22",
      name: "Divine Taiwo",
      fullName: "Divine Taiwo",
      nickname: "Vince",
      dateOfBirth: "7/12",
      department: "Applied Geophysics",
      nfcsSociety: "Nil",
      bestLevel: "100",
      funMoment: "Can’t think of one",
      bio: "Quiet eyes, loud soul. I don’t shout to shine",
      stressfulLevel: "300",
      stateOrTribe: "Ekiti State",
      hobby: "Watching movie, playing games",
      relationshipStatus: "Single",
      forumPaddy: "Cecilia",
      forumCrush: "She’s probably reading this now",
      bibleVerse: "Job 8:7",
      favQuote: "The quieter you become, the more you can hear",
      favSlang: "Omo",
      japaOrStay: "Stay",
      skill: "Concierge-in-training",
      partingWords:
        "Keep exploring, stay open to new ideas, and let the quiet moments spark your greatest insights. Best of luck on your journey!",
      imageUrl:
        "https://drive.google.com/open?id=1r7lQhxNIyx4r75TYRSU9QTRR0tFvoGyW",
    },
    {
      id: "23",
      name: "Ogechi Vivienne Obidigbo",
      fullName: "Ogechi Vivienne Obidigbo",
      nickname: "Splashy Vivy",
      dateOfBirth: "6/14",
      department: "Agricultural extension and rural development",
      nfcsSociety: "CCRN",
      bestLevel: "200 level",
      funMoment: "Spending time with family and friends",
      bio: "I'm easy-going, friendly, free spirited, dedicated, intelligent. I smile alot and I love doing things/being around people that makes me happy. I dislike disrespect, dishonesty, and backbiters.",
      stressfulLevel: "300 level",
      stateOrTribe: "Anambra state/Igbo",
      hobby: "Reading novels, watching movies, eating, and sleeping😉🤭",
      relationshipStatus: "In a relationship",
      forumPaddy: "Maria Ezeobinwa😘",
      forumCrush: "None",
      bibleVerse: "Jeremiah 29 vs 11",
      favQuote: "What will be will be",
      favSlang: "Jehovah bu eze (God is King)",
      japaOrStay: "Japa",
      skill: "Online entrepreneur",
      partingWords:
        "There are no short cuts to success. When the going gets tough, keep going. Trust God and trust the process. At the end of the day, you will be glad you did. ",
      imageUrl:
        "https://drive.google.com/open?id=1WCGBdcBafL-PJg9sH6PRUDdGgD09kILu",
    },
    {
      id: "24",
      name: "Rachael Iduh Onyemowo",
      fullName: "Rachael Iduh Onyemowo",
      nickname: "Ray",
      dateOfBirth: "3/31",
      department: "Mathematics",
      nfcsSociety: "Church warden",
      bestLevel: "400 lvl",
      funMoment: "Fyb dinner night 2023 set",
      bio: "A lover of Jesus",
      stressfulLevel: "300lvl",
      stateOrTribe: "Okpokwu in Benue state/ Idoma",
      hobby: "Looking good",
      relationshipStatus: "Single",
      forumPaddy: "I don’t have",
      forumCrush: "I don’t have",
      bibleVerse: "Psalms 91",
      favQuote: "Jesus above all",
      favSlang: "Dey for who dey for you",
      japaOrStay: "Japa",
      skill: "Fashion designer",
      partingWords: "Just keep doing your best and allow God perfect it",
      imageUrl:
        "https://drive.google.com/open?id=1woE9kjXrQWU_y9W67JLmcwNvIA0rRpNC",
    },
    {
      id: "25",
      name: "Kuanum Msughter",
      fullName: "Kuanum Msughter",
      nickname: "",
      dateOfBirth: "5/26",
      department: "Quantity Survey",
      nfcsSociety: "Legion of Mary, Divine Mercy.",
      bestLevel: "400l",
      funMoment: "*",
      bio: "I like peace",
      stressfulLevel: "300l",
      stateOrTribe: "Benue, Tiv",
      hobby: "Still searching",
      relationshipStatus: "In a relationship",
      forumPaddy: "Alfred",
      forumCrush: "They many oh 😂",
      bibleVerse: "Psalms 37:5",
      favQuote:
        "There's no passion to be found playing small in settling for a life that is less than the one you're capable of living.",
      favSlang: "Can't think of one",
      japaOrStay: "Stay",
      skill: "",
      partingWords:
        "Don't say it's not \"F\" so I'm ok, always strive for a higher grade.",
      imageUrl:
        "https://drive.google.com/open?id=1HKTmoWi6v3iTbv3hGbtmLDFVrtCG9ejh",
    },
    {
      id: "26",
      name: "PIUS GODSAVE PETER",
      fullName: "PIUS GODSAVE PETER",
      nickname: "Pioneer",
      dateOfBirth: "1/1",
      department: "AGRICULTURAL ECONOMICS AND FARM MANAGEMENT",
      nfcsSociety: "None",
      bestLevel: "400",
      funMoment: "Church cleaning",
      bio: "Funny",
      stressfulLevel: "500",
      stateOrTribe: "BENUE/IDOMA",
      hobby: "Drawing and listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Doris",
      forumCrush: "None",
      bibleVerse: "Matt 11:29",
      favQuote:
        "If one does not put his heart and desire on people Neva shall his heart be broken",
      favSlang: "Omo life na figure of speech",
      japaOrStay: "Japa",
      skill: "Tailoring",
      partingWords: "Omo build from year one",
      imageUrl:
        "https://drive.google.com/open?id=1-UqimkWvOAissn1Q4vGHZUeH1ZQGfYej",
    },
    {
      id: "27",
      name: "Omoja Stanley ojonugwa",
      fullName: "Omoja Stanley ojonugwa",
      nickname: "Onowu",
      dateOfBirth: "12/16",
      department: "Surveying and Geoinformatics",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Picnic in 2023",
      bio: "Curious to know more",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/ igala",
      hobby: "Having conversations",
      relationshipStatus: "Single",
      forumPaddy: "Everyone",
      forumCrush: "None",
      bibleVerse: "Proverbs 3:5-6",
      favQuote: "God knows best",
      favSlang: "All is well",
      japaOrStay: "Japa",
      skill: "GIS analyst",
      partingWords: "Hold on to God and protect your mental health. ",
      imageUrl:
        "https://drive.google.com/open?id=1_eSwtaPUxIfI1HZZeIJdePpBC9TbTpmL",
    },
    {
      id: "28",
      name: "Ayaka Stephen abene",
      fullName: "Ayaka Stephen abene",
      nickname: "Popo",
      dateOfBirth: "1/7",
      department: "Mechanical engineering",
      nfcsSociety: "Sacred heart choir",
      bestLevel: "500l",
      funMoment: "winnig the NFCS week",
      bio: "😂🤔😒",
      stressfulLevel: "300l",
      stateOrTribe: "Nasarawa/ Eggon",
      hobby: "Football, playing instruments",
      relationshipStatus: "Single",
      forumPaddy: "All my guys",
      forumCrush: "Jovita",
      bibleVerse: "Psalm 121",
      favQuote: "Now I know",
      favSlang: "God Abeg",
      japaOrStay: "Japa",
      skill: "Anything online / aircraft maintenance",
      partingWords:
        "Is not too late continue the struggle you will get there/ make it",
      imageUrl:
        "https://drive.google.com/open?id=1vKx-ALPoualkaF40VdtZsRRU9KH2b4-5",
    },
    {
      id: "29",
      name: "MASESHIN TERHIDE JUDE",
      fullName: "MASESHIN TERHIDE JUDE",
      nickname: "Bigger fish",
      dateOfBirth: "12/4",
      department: "URBAN AND REGIONAL PLANNING",
      nfcsSociety: "Legion of Mary/ Talent Theater 🎭",
      bestLevel: "300l",
      funMoment:
        "As a fresher playing a football match against 500l in Nfc's week",
      bio: "I'm a barber with a PASSION FOR PRECISION, and I also have a DRAMATIC FLAIR. I'm fueled by curiosity love diving into debates and always speak my mind with honesty - no grudges, just AUTHENTICITY.",
      stressfulLevel: "400l",
      stateOrTribe: "Benue/ Tiv",
      hobby: "Football at all levels",
      relationshipStatus: "In a relationship",
      forumPaddy: "Bitrus Obaze",
      forumCrush: "Fredrica",
      bibleVerse:
        "No favorite Bible quote in particular, but I live by the principles of kindness, honesty, and compassion.",
      favQuote: "Be the change you want to see in thee world 🌎",
      favSlang: "E no get as e wan be way e Neva be b4 🪖",
      japaOrStay: "Stay",
      skill: "Barber",
      partingWords:
        "Do it even if it doesn't make sense to all make sense only when you graduate",
      imageUrl:
        "https://drive.google.com/open?id=1NamTIXNsj_ab34TkTAopPzcW3_ld83DV",
    },
    {
      id: "30",
      name: "Nwakuche Emmanuel",
      fullName: "Nwakuche Emmanuel",
      nickname: "Skentee",
      dateOfBirth: "5/22",
      department: "Agricultural and Bioresources Engineering",
      nfcsSociety: "Congregation",
      bestLevel: "400l",
      funMoment: "NFCS picnic",
      bio: "Just a striving young man, aspirin for the best",
      stressfulLevel: "300l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Footballing",
      relationshipStatus: "Single",
      forumPaddy: "Onume",
      forumCrush: "None currently",
      bibleVerse: "1 Thessalonians 5:16",
      favQuote: "Always Aspire to Acquire the Desire you Admire.",
      favSlang: "You think say na play",
      japaOrStay: "Japa",
      skill: "Hair stylist",
      partingWords: "Work smart, always take a deep breath, life na one.",
      imageUrl:
        "https://drive.google.com/open?id=1V4SCrcdBEhyk2swWSOZTBPt1XiVdMprN",
    },
    {
      id: "31",
      name: "Ejeh Mercy Jumai",
      fullName: "Ejeh Mercy Jumai",
      nickname: "Lulu❤️",
      dateOfBirth: "12/4",
      department: "Building",
      nfcsSociety: "Nillll",
      bestLevel: "200l",
      funMoment: "Mass ( when choir sings)",
      bio: "I'm free, fun loving and warm hearted person and a cheerful giver when I have. I no like when you take my kindness for granted",
      stressfulLevel: "100l",
      stateOrTribe: "Kogi/Igala",
      hobby: "Traveling, listening to music etc",
      relationshipStatus: "Single",
      forumPaddy: "Praise",
      forumCrush: "Nillll",
      bibleVerse: "Psalm 40",
      favQuote: "Lass lass we go dey alright",
      favSlang: "Kaiii",
      japaOrStay: "Stay",
      skill: "Mummy and Daddy's girl 😍",
      partingWords: "There's more to life than school",
      imageUrl:
        "https://drive.google.com/open?id=1-5dLSuJbGb-SyhONfDBGx1210lplTpcF",
    },
    {
      id: "32",
      name: "Iwuamadi Joy",
      fullName: "Iwuamadi Joy",
      nickname: "Joyful",
      dateOfBirth: "6/25",
      department: "Chemistry",
      nfcsSociety: "Choir and JTL",
      bestLevel: "200l",
      funMoment: "Revival 2023 and NFCS week 2023",
      bio: "I guess you know already",
      stressfulLevel: "300l",
      stateOrTribe: "Imo / Igbo",
      hobby: "Reading, singing, designing, teaching, traveling",
      relationshipStatus: "In a relationship",
      forumPaddy: "Jovita and Onume",
      forumCrush: "Jason😍",
      bibleVerse: "Isaiah 41 vs 10",
      favQuote:
        "Everything you dream about and wish is on the other side of fear",
      favSlang: "Nawaooo",
      japaOrStay: "Japa",
      skill: "Ui/Ux design and Teaching",
      partingWords: "Futminna is not for the weak, so stay strong and focused",
      imageUrl:
        "https://drive.google.com/open?id=1qXiPLyJJHkE7shm7FGjVnnyLT_Q_1KnD",
    },
    {
      id: "33",
      name: "Emmanuella chinonye Ezeja",
      fullName: "Emmanuella chinonye Ezeja",
      nickname: "Ella",
      dateOfBirth: "12/4",
      department: "Chemistry",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "During exquisite general meetings",
      bio: "I'm a semi introvert",
      stressfulLevel: "300l",
      stateOrTribe: "Enugu state/ Igbo",
      hobby: "Watching anime and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Francis chima",
      forumCrush: "🤭",
      bibleVerse: "Psalm 121vs1-8",
      favQuote: "Freedom is not given it's taken",
      favSlang: "We go dey alright",
      japaOrStay: "Japa",
      skill: "Skill and side hustle",
      partingWords: "But God for front and just make money",
      imageUrl:
        "https://drive.google.com/open?id=171mUfmgCOtqKw1AIN-nH6SB-wXUw5Yew",
    },
    {
      id: "34",
      name: "TIMBIR DAVID",
      fullName: "TIMBIR DAVID",
      nickname: "Mazi Okoro",
      dateOfBirth: "9/30",
      department: "Quantity surveying",
      nfcsSociety: "Altarknight, JTL, NFCS BRIGADE",
      bestLevel: "200l",
      funMoment: "Hangouts",
      bio: "I am a visionary leader with exception leadership qualities. In NFCS, I served as: 1. Chief sacristan 2. Altar servers President. 3. Exquisite family coordinator. 4. RSM of NFCS BRIGADE.\nAs a politician I've served as: 1. NAQSS PRO 2. Honourable member representing Quantity surveying for 2 sessions. 3. Chairman environmental constitution review. 4. NAQSS PRESIDENT 4. General class rep environmental. 6. Gen sec. Environmental stakeholders assembly.",
      stressfulLevel: "300l",
      stateOrTribe: "BENUE/TIV",
      hobby: "Politicking/site seeing",
      relationshipStatus: "In a relationship",
      forumPaddy: "M .O. V",
      forumCrush: "No be me Una want set up",
      bibleVerse:
        "Ephesians 2:8-9 : For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast.",
      favQuote: "Do it afraid",
      favSlang: "Omooo",
      japaOrStay: "Japa",
      skill: "Interior design",
      partingWords:
        "We are an exceptional people, let ho out there and dominate the world.",
      imageUrl:
        "https://drive.google.com/open?id=1gtRo3yRddFdz0ArUVgsTugRT3CY-5Z4h",
    },
    {
      id: "35",
      name: "Ochigbo john",
      fullName: "Ochigbo john",
      nickname: "Johnito",
      dateOfBirth: "9/23",
      department: "Microbiology",
      nfcsSociety: "Church warden",
      bestLevel: "200l",
      funMoment: "Exquisite Pinic",
      bio: "Am calm and free minded person",
      stressfulLevel: "500l",
      stateOrTribe: "Benue/idoma",
      hobby: "Playing games,listening to music and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Oche, Abutu and kelvin",
      forumCrush: "None",
      bibleVerse: "Psalm 91",
      favQuote: "Let love lead",
      favSlang: "God over everything",
      japaOrStay: "Stay",
      skill: "Working toward acquiring one",
      partingWords: "With God,you will redefine what impossible",
      imageUrl:
        "https://drive.google.com/open?id=1DCDLm-IRUn8vydXT7St1eDPcjDBxorMJ",
    },
    {
      id: "36",
      name: "AJODO HYCIENT WISDOM",
      fullName: "AJODO HYCIENT WISDOM",
      nickname: "WISZOEGO",
      dateOfBirth: "3/3",
      department: "MATERIALS ENGINEERING",
      nfcsSociety: "Member of SHC",
      bestLevel: "300l",
      funMoment: "Playing",
      bio: "I'm simple and introvert",
      stressfulLevel: "200l",
      stateOrTribe: "KOGI/IGALA",
      hobby: "Reading/eating",
      relationshipStatus: "In a relationship",
      forumPaddy: "Stanley",
      forumCrush: "Nobody",
      bibleVerse: "Daniel 12 :3",
      favQuote: "Do to other want they did to you and don't be laxy",
      favSlang: "Na God dey do am not man",
      japaOrStay: "Japa",
      skill: "Business/tech",
      partingWords: "Read well oo, FUT no moimoi",
      imageUrl:
        "https://drive.google.com/open?id=1uROhldn1nfhSLsgo090VwFkbbTMPdZPN",
    },
    {
      id: "37",
      name: "NWOSU VALENTINE OBINNA",
      fullName: "NWOSU VALENTINE OBINNA",
      nickname: "Alchemist",
      dateOfBirth: "12/14",
      department: "GEOPHYSICS",
      nfcsSociety: "LEGION OF MARY",
      bestLevel: "400l",
      funMoment: "Exquisite Picnic",
      bio: "Untamed",
      stressfulLevel: "100l",
      stateOrTribe: "IMO STATE",
      hobby: "Driving",
      relationshipStatus: "In a relationship",
      forumPaddy: "Lokosa",
      forumCrush: "Miss Bold & Beautiful",
      bibleVerse: "Proverb 14:14",
      favQuote: "Kings are made, not born",
      favSlang: "We gonna make it",
      japaOrStay: "Japa",
      skill: "Hydrographic Data Analyst, Truck Driver",
      partingWords: "Go Get It",
      imageUrl:
        "https://drive.google.com/open?id=1Y5h_x6MLPKRtK29X6tB1iKBb0AgmdXWM",
    },
    {
      id: "38",
      name: "Adagedo Solomon Israel",
      fullName: "Adagedo Solomon Israel",
      nickname: "Nill",
      dateOfBirth: "5/5",
      department: "Mechatronics",
      nfcsSociety: "Choir",
      bestLevel: "500l",
      funMoment: "Every forum gathering.",
      bio: "Just a random dude who believes in empathy kindness, and love.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Idoma",
      hobby: "Living...",
      relationshipStatus: "Single",
      forumPaddy: "Everybody",
      forumCrush: "Sharona",
      bibleVerse: "Psalm 91",
      favQuote: "What you do frequently becomes your frequency.",
      favSlang: "",
      japaOrStay: "Japa",
      skill: "Backend / Machine learning engineer",
      partingWords: "",
      imageUrl:
        "https://drive.google.com/open?id=1pyExM6lHU6c81bEYQsiQDZeWZqNEwBm1",
    },
    {
      id: "39",
      name: "Shar Alfred Wuese",
      fullName: "Shar Alfred Wuese",
      nickname: "Nil",
      dateOfBirth: "6/1",
      department: "Animal production Technology",
      nfcsSociety: "Legion, purgatorial society",
      bestLevel: "400l",
      funMoment: "Exquisite family Picnic",
      bio: "Calm always",
      stressfulLevel: "300l",
      stateOrTribe: "Benue",
      hobby: "playing football",
      relationshipStatus: "Single",
      forumPaddy: "Robert",
      forumCrush: "Nil",
      bibleVerse: "psalm 123",
      favQuote: "The Devil you know is better than the Angel you don't know",
      favSlang: "Dey play nah",
      japaOrStay: "Stay",
      skill: "Amazon KDP",
      partingWords: "Your Skill is better than your degree 💯",
      imageUrl:
        "https://drive.google.com/open?id=1O-GkWbswPIjLL42jutM29FrQXWuoykOw",
    },
    {
      id: "40",
      name: "Theresa Ngodoo Agena",
      fullName: "Theresa Ngodoo Agena",
      nickname: "Tess",
      dateOfBirth: "9/21",
      department: "Agric extension",
      nfcsSociety: "Saint Vincent de Paul",
      bestLevel: "400l",
      funMoment: "Purple funfest",
      bio: "I love God and I love food and curating new recipes",
      stressfulLevel: "300l",
      stateOrTribe: "Benue state/ Tiv",
      hobby: "Cooking, yapping, making money",
      relationshipStatus: "Single",
      forumPaddy: "Micheal Ehianeta and Emmanuel ochaje",
      forumCrush: "All the fine fine ladies 😂",
      bibleVerse: "Psalm 121",
      favQuote: "Life isn’t all bed of roses",
      favSlang: "Omoooo",
      japaOrStay: "Stay",
      skill: "Chefestttt",
      partingWords: "Hold God tight, and work smart",
      imageUrl:
        "https://drive.google.com/open?id=1MXo-CTc2Kex0GUdExvjTdQNJEBYiaJ9X",
    },
    {
      id: "41",
      name: "Adejoh happiness",
      fullName: "Adejoh happiness",
      nickname: "Tina",
      dateOfBirth: "2/14",
      department: "Quantity surveying",
      nfcsSociety: "SHC",
      bestLevel: "400l",
      funMoment: "Quantity time with love ones",
      bio: "Easy going person",
      stressfulLevel: "500l",
      stateOrTribe: "Kogi/ igala",
      hobby: "Singing, reading and cooking",
      relationshipStatus: "Single",
      forumPaddy: "Peace",
      forumCrush: "None",
      bibleVerse: "Psalm 25",
      favQuote: "With God all things are possible",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Entrepreneur",
      partingWords: "Giving up is not an option",
      imageUrl:
        "https://drive.google.com/open?id=15gFNEK34F9Y-o8lseYQcRnKfUrIlq69b",
    },
    {
      id: "42",
      name: "Vershima, Hembafan Veronica",
      fullName: "Vershima, Hembafan Veronica",
      nickname: "Fancyella",
      dateOfBirth: "6/10",
      department: "Urban and Regional Planning",
      nfcsSociety: "Board of Lectors",
      bestLevel: "500l",
      funMoment: "Whenever my exquisite family has a get-together.💗",
      bio: "I am a straightforward person; I love to play a lot, but I hate mind games.",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Reading (not school books), Exploring ideas for growth.",
      relationshipStatus: "Single",
      forumPaddy: "Favour and Becky",
      forumCrush: "Nil",
      bibleVerse: "Romans 8:1",
      favQuote: "Be your own responsibility.",
      favSlang: "Na wao",
      japaOrStay: "Japa",
      skill: "Fashion Designing, FB/IG Ads, Ghostwriting.",
      partingWords:
        "Be responsible for yourself and always put God first in everything you do - never let Him go.",
      imageUrl:
        "https://drive.google.com/open?id=1i03uPz8xwKaip9EmzErBI6MrcQr0tFAI",
    },
    {
      id: "43",
      name: "Emmanuel Wilfred Ochai",
      fullName: "Emmanuel Wilfred Ochai",
      nickname: "Sino",
      dateOfBirth: "10/11",
      department: "Chemical Engineering",
      nfcsSociety: "Altar knight, YCS, Tech unit & Church warden",
      bestLevel: "200l",
      funMoment: "Exco Tenure and NFCS weeks",
      bio: "What I plan for, I achieve it no matter the cost",
      stressfulLevel: "300l",
      stateOrTribe: "KOGI STATE/Igala",
      hobby: "Competing and talking",
      relationshipStatus: "Single",
      forumPaddy: "Sunday AB",
      forumCrush: "Chisom lifestyle",
      bibleVerse: "Them many",
      favQuote: "It's now than never",
      favSlang: "God de",
      japaOrStay: "Stay",
      skill: "Editing, talking",
      partingWords: "As it reach me, it go reach you. Everything na time",
      imageUrl:
        "https://drive.google.com/open?id=1XHWCGk76OHbHmn5UcWluugGhvrgLKupX",
    },
    {
      id: "44",
      name: "Orasaa Doose Favour",
      fullName: "Orasaa Doose Favour",
      nickname: "Daisy",
      dateOfBirth: "3/6",
      department: "Urban and regional planning",
      nfcsSociety: "Nill",
      bestLevel: "400l",
      funMoment: "Grandpa's sermons",
      bio: "Am cool and straight forward",
      stressfulLevel: "300l",
      stateOrTribe: "Benue /Tiv",
      hobby: "Washing and cleaning",
      relationshipStatus: "In a relationship",
      forumPaddy: "Veronica and Becky",
      forumCrush: "Nill",
      bibleVerse: "Psalms 37:5",
      favQuote: "If it yours it will come back to you",
      favSlang: "God no go shame us",
      japaOrStay: "Japa",
      skill: "Digital marketing",
      partingWords: "Strive harder",
      imageUrl:
        "https://drive.google.com/open?id=1Q9VcIiI_puBMRBMzIDe3KOLw3hP07XrK",
    },
    {
      id: "45",
      name: "Izekwe Ndubuisi Joshua",
      fullName: "Izekwe Ndubuisi Joshua",
      nickname: "Joe_kings",
      dateOfBirth: "5/27",
      department: "Geoinformatics/Surveying",
      nfcsSociety: "CCRN",
      bestLevel: "400l",
      funMoment: "The first mass with grandpa!",
      bio: "I am calm, kind but not nice!",
      stressfulLevel: "300l",
      stateOrTribe: "Ebonyi/Igbo",
      hobby: "Watching leadership documentaries!",
      relationshipStatus: "Single",
      forumPaddy: "Nill",
      forumCrush: "E plenty",
      bibleVerse: "Jeremiah 31:3",
      favQuote: "The truth will set you free, but first it will piss you off!.",
      favSlang: "E choke!",
      japaOrStay: "Japa",
      skill: "Business",
      partingWords:
        "Having a good heart in a wicked world feels like wearing a white in the rain; pure but soaked in regrets. However, don't let the mud turn you cold. Be kind but never nice!",
      imageUrl:
        "https://drive.google.com/open?id=11aRE-VRVK_J0KNVLX8D1W7gDvZvpNQrV",
    },
    {
      id: "46",
      name: "Atsewe Joshua",
      fullName: "Atsewe Joshua",
      nickname: "Josh.",
      dateOfBirth: "3/17",
      department: "Material and metallurgical engineering",
      nfcsSociety: "Jtl, legion of Mary",
      bestLevel: "500l",
      funMoment: "Exquisite and gracious banter.",
      bio: "RESERVED!",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/Tiv",
      hobby: "Working with machines.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Nil",
      forumCrush: "Tzgrfwqkpvc",
      bibleVerse: "Psalms 1:1-2",
      favQuote:
        "Godliness isn't just the act of loving, it's transcend to loving humanity too",
      favSlang: "Everyone go dey fine las las, no d assume God.",
      japaOrStay: "Stay",
      skill: "Anything industrial machine.",
      partingWords: "Everyday...PRAY!!!",
      imageUrl:
        "https://drive.google.com/open?id=1F8hPnT-adJjseCSmvetiwXgJRiB0lT6x",
    },
    {
      id: "47",
      name: "Obute ladi",
      fullName: "Obute ladi",
      nickname: "Miss Sanity",
      dateOfBirth: "12/15",
      department: "Agric economics and farm management",
      nfcsSociety: "Legion",
      bestLevel: "500l",
      funMoment: "Hanging out with friends",
      bio: "I love studying a lot",
      stressfulLevel: "300l",
      stateOrTribe: "Benue/ idoma",
      hobby: "Studying",
      relationshipStatus: "Single",
      forumPaddy: "None",
      forumCrush: "None",
      bibleVerse: "Psalm 51:10-11",
      favQuote:
        "Procrastination is the beginning of laziness which leads to failure",
      favSlang: "God abeg",
      japaOrStay: "Japa",
      skill: "Skill",
      partingWords: "Keep pushing and never think of giving up no matter what",
      imageUrl:
        "https://drive.google.com/open?id=1H6UH2RquUqiuhpGgIhN9HLrIPaINgyHJ",
    },
    {
      id: "48",
      name: "Francis Esther Ugbedeojo",
      fullName: "Francis Esther Ugbedeojo",
      nickname: "Estizzy",
      dateOfBirth: "3/22",
      department: "Telecommunication Engineering",
      nfcsSociety: "Legion of Mary & Divine Mercy",
      bestLevel: "400l",
      funMoment: "Exquisite final year choir rehearsal & Picnic 🧺",
      bio: "Am fun to be with",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi state/ Igala",
      hobby: "Reading & Listening to music",
      relationshipStatus: "Single",
      forumPaddy: "Joy,NWJ, Ebuka,John, David",
      forumCrush: ":⁠-⁠)",
      bibleVerse: "Psalms 121 vs 1 -2",
      favQuote: "Pikin wey no get helper suppose get sense",
      favSlang: "Fvck",
      japaOrStay: "Japa",
      skill: "Fragrance vendor",
      partingWords: "School no be scam..Take your studies serious 🙏�",
      imageUrl:
        "https://drive.google.com/open?id=1E76LQgguEHav29V2mwAenAmRegrbC_ry",
    },
    {
      id: "49",
      name: "Uchebueze Ebuka",
      fullName: "Uchebueze Ebuka",
      nickname: "De telecom",
      dateOfBirth: "12/23",
      department: "Telecommunication Engineering",
      nfcsSociety: "Jtl and Church warden",
      bestLevel: "300l",
      funMoment: "Nfcs week",
      bio: "Am a very serious person when it comes to serious matters.",
      stressfulLevel: "300l",
      stateOrTribe: "Imo/Igbo",
      hobby: "Praying, Reading and Cooking",
      relationshipStatus: "In a relationship",
      forumPaddy: "Esther Francis",
      forumCrush: "Sucrose mamito",
      bibleVerse: "Ps.119 vs 99",
      favQuote: "Work harder, because nobody cares about you.",
      favSlang: "God abeg help me oo",
      japaOrStay: "Japa",
      skill: "Technical Analyst, A chef",
      partingWords:
        "Always pray before reading, and pray after reading, if you want to remember.",
      imageUrl:
        "https://drive.google.com/open?id=1XnsNBcCT6xHiFyfjRHpfKKtuh_8z5D4g",
    },
    {
      id: "50",
      name: "Victor Oluwatimileyin Adeboye",
      fullName: "Victor Oluwatimileyin Adeboye",
      nickname: "Leo",
      dateOfBirth: "11/6",
      department: "Civil Engineering",
      nfcsSociety: "Altar Knights, Church Wardens/NFCS Brigade, Legion of Mary",
      bestLevel: "100l",
      funMoment: "Each time we gather as a family",
      bio: "I am Victor Oluwatimileyin Adeboye, one time this and that, this time...😂, I am very unique in my way.",
      stressfulLevel: "300l",
      stateOrTribe: "Osun/Yoruba",
      hobby: "Singing",
      relationshipStatus: "Single",
      forumPaddy: "The MOV😁",
      forumCrush: "She left the group…",
      bibleVerse: "Jeremiah 29:11",
      favQuote: "Nil",
      favSlang: "Omo",
      japaOrStay: "Japa",
      skill: "Pig farming",
      partingWords:
        "Do your best, do the rest, learn, unlearn, relearn and stay open minded.",
      imageUrl:
        "https://drive.google.com/open?id=19bGiwjHl7j0qEMvIWxUw4q0tkgDYX5hJ",
    },
    {
      id: "51",
      name: "Emmanuel Akubo Unekwuojo",
      fullName: "Emmanuel Akubo Unekwuojo",
      nickname: "Nuel/Manuel",
      dateOfBirth: "1/19",
      department: "Geophysics",
      nfcsSociety: "Legion of mary, SVP, SHC",
      bestLevel: "100l",
      funMoment: "When everything goes my way.",
      bio: "Someone who wants to do everything and anything he can do.",
      stressfulLevel: "300l",
      stateOrTribe: "Kogi/Igala",
      hobby:
        "Playing violin, football, badminton, anime, series, studying, debating and lots more.",
      relationshipStatus: "In a relationship",
      forumPaddy: "Eveyone I talk to",
      forumCrush: "I don't do that",
      bibleVerse: "Luke 15:4-7",
      favQuote:
        "Consistency is not a joke..what is a joke is you think you can make it without consistency",
      favSlang: "Tatakae",
      japaOrStay: "Japa",
      skill: "Research/UIUX",
      partingWords:
        "You are the main character of this story, don't let anyone deceive you",
      imageUrl:
        "https://drive.google.com/open?id=117YAhMZiQs51Gvgb0lNlnO6R_jFrY_YA",
    },
  ];

  const awardCategories = [
    "Most handsome (gk)",
    "Most handsome (bosso)",
    "Most beautiful (gk)",
    "Most beautiful (bosso)",
    "Most intellectual (gk)",
    "Most intellectual (bosso)",
    "Most social",
    "Entrepreneur of the year (gk)",
    "Entrepreneur of the year (bosso)",
    "Best dressed male (gk)",
    "Best dressed male (bosso)",
    "Best dressed female (gk)",
    "Best dressed female (bosso)",
    "Most dedicated (gk)",
    "Most dedicated (bosso)",
    "Outstanding personality (gk)",
    "Outstanding personality (bosso)",
    "Cool, calm and collected (gk)",
    "Cool, calm and collected (bosso)",
    "Most influential",
    "Best clique (gk)",
    "Best clique (bosso)",
    "Mr. Culture (gk)",
    "Mr. Culture (bosso)",
    "Miss culture (gk)",
    "Miss. Culture (bosso)",
    "Most political",
    "Sports personality of the year (gk)",
    "Sports personality of the year (bosso)",
    "Mr. Ebony (gk)",
    "Mr. Ebony (bosso)",
    "Miss. Ebony (gk)",
    "Miss. Ebony (bosso)",
    "Music personality of the year",
    "Couple of the year",
  ];

  // Handler functions
  const handleAddNomination = () => {
    if (nominee && category) {
      setIsAdding(true);
      setTimeout(() => {
        const selectedNominee = nominees.find((n) => n.id === nominee);
        const newNomination: Nomination = {
          id: Date.now(),
          nominee: selectedNominee?.name || nominee,
          category,
          quantity,
        };
        setNominations([...nominations, newNomination]);
        setNominee("");
        setCategory("");
        setAmount((amount) => (amount += +newNomination.quantity * 10000));
        setQuantity(1);
        setIsAdding(false);
      }, 300);
    }
  };

  const handleRemoveNomination = (id: number, amo: number) => {
    setNominations(nominations.filter((nomination) => nomination.id !== id));
    setAmount((amount) => amount - amo * 10000);
  };

  const handleViewProfile = (nomineeId: string) => {
    const profile = nominees.find((n) => n.id === nomineeId);
    setViewingProfile(profile || null);
  };

  const handleCloseProfile = () => {
    setViewingProfile(null);
  };

  return (
    <div className="min-h-screen w-screen p-4 flex flex-col justify-center items-center text-slate-400 bg-gradient-to-br from-slate-50 to-blue-50  sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-7 flex flex-col justify-center items-center">
          <img className="h-11 w-10" src="nfcs-logo.png" alt="nfcs logo" />
          <h1 className="text-4xl font-bold text-slate-800 mb-1">
            Nox Amoris Award
          </h1>
          <p className="text-xl text-slate-600">
            Nominate your favorite candidates for this year's awards
          </p>
        </div>

        {/* Nomination Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Make a Nomination
          </h2>

          <div className="space-y-6">
            {/* Nominee Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nominee's Name
              </label>
              <div className="flex gap-2">
                <select
                  value={nominee}
                  onChange={(e) => setNominee(e.target.value)}
                  className="flex-1 px-4 py-3 w-full rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a nominee...</option>
                  {nominees.map((nom) => (
                    <option key={nom.id} value={nom.id}>
                      {nom.name}
                    </option>
                  ))}
                </select>
                {nominee !== "" && (
                  <button
                    onClick={() => nominee && handleViewProfile(nominee)}
                    disabled={!nominee}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      !nominee
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                    }`}
                  >
                    About
                  </button>
                )}
              </div>
            </div>

            {/* Award Category */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Award Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an award...</option>
                {awardCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Nomination Amount */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Nomination Amount (N100/Nomination)
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                min="1"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAddNomination}
              disabled={!nominee || !category || isAdding}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                !nominee || !category || !email
                  ? "bg-gray-400 cursor-not-allowed"
                  : isAdding
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isAdding ? "Adding..." : "Nominate"}
            </button>
          </div>
        </div>

        {/* Nominations List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Your Nominations
          </h2>

          {nominations.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              {/* <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg> */}
              <p className="mt-2">You have not nominated anyone yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {nominations.map((nom) => (
                <div
                  key={nom.id}
                  className="flex justify-between items-center p-4 bg-blue-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-slate-800">
                      {nom.nominee}
                    </h4>
                    <p className="text-sm text-slate-600">{nom.category}</p>
                    <p className="text-sm text-blue-600">
                      N{nom.quantity * 100}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const nomineeId = nominees.find(
                          (n) => n.name === nom.nominee
                        )?.id;
                        if (nomineeId) handleViewProfile(nomineeId);
                      }}
                      className="text-blue-500 hover:text-blue-700 p-2"
                      title="View profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        handleRemoveNomination(nom.id, nom.quantity)
                      }
                      className="text-red-500 hover:text-red-700 p-2"
                      title="Remove nomination"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center text-xl text-black">
                <p>Total: N{amount / 100}</p>
              </div>

              {/* make payment*/}
              <PaystackButton
                {...componentProps}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                  nominations === null
                    ? "bg-gray-400 cursor-not-allowed"
                    : isAdding
                    ? "bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Profile Modal */}
      {viewingProfile && (
        <div
          onClick={handleCloseProfile}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={handleCloseProfile}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Profile Image */}
              <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl overflow-hidden">
                {viewingProfile.imageUrl ? (
                  <img
                    src={viewingProfile.imageUrl}
                    alt={viewingProfile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <svg
                      className="w-24 h-24 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Profile Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-800">
                  {viewingProfile.name}
                </h3>
                <p className="text-lg text-slate-600 mb-6">
                  {viewingProfile.department}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      About
                    </h4>
                    <p className="text-slate-600">{viewingProfile.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Favorite Bible Verse
                    </h4>
                    <p className="text-slate-600 font-medium italic">
                      "{viewingProfile.bibleVerse}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-2">
                      Most Fun Moment
                    </h4>
                    <p className="text-slate-600">{viewingProfile.funMoment}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-slate-900 font font-semibold">
                      NFCS Society
                    </p>
                    <h4 className="text-slate-700 font-medium">
                      {viewingProfile.nfcsSociety}.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">by 08121315694</div>
    </div>
  );
}
