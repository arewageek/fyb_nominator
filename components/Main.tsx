"use client";
import { get, push, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "@/app/firebase/config";

interface Nomination {
  id: number;
  nominee: string;
  category: string;
  amount: number;
}

interface NomineeProfile {
  id: string;
  name: string;
  fullName: string;
  department: string;
  bio: string;
  bibleVerse: string;
  funMoment: string;
  imageUrl: string;
}

export default function NominationForm() {
  // State management
  const [nominee, setNominee] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [nominations, setNominations] = useState<Nomination[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [viewingProfile, setViewingProfile] = useState<NomineeProfile | null>(
    null
  );

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
  const nominees: NomineeProfile[] = [
    {
      id: "1",
      name: "Jane Smith",
      fullName: "Jane Maria Smith",
      department: "Charismatic Renewal - Choir",
      bio: "Leading the choir has been a profound journey of faith for me. I've poured my heart into our music, aiming to lift spirits and bring us all closer to God through song.",
      bibleVerse: "Psalm 46:10 - 'Be still, and know that I am God.'",
      funMoment:
        "During the Christmas carol practice, when the power went out and we all continued singing with our phone torches. The harmony was magical.",
      imageUrl: "/profiles/jane-smith.jpg", // Make sure this image exists in public/profiles/
    },
    {
      id: "2",
      name: "Rev. John Smith",
      fullName: "John Michael Smith",
      department: "Pastoral Team",
      bio: "Serving as a pastor has been my calling for over 15 years. I strive to bring God's word to life through meaningful sermons and community outreach.",
      bibleVerse:
        "Jeremiah 29:11 - 'For I know the plans I have for you,' declares the Lord",
      funMoment:
        "When we organized the first outdoor service and it started raining, but everyone stayed and worshipped in the rain.",
      imageUrl: "/profiles/john-smith.jpg",
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
    "Most supporting brand (uncontested)",
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
    "Academia of the year (uncontested)",
    "Most political",
    "Sports personality of the year (gk)",
    "Sports personality of the year (bosso)",
    "Mr. Ebony (gk)",
    "Mr. Ebony (bosso)",
    "Miss. Ebony (gk)",
    "Miss. Ebony (bosso)",
    "Music personality of the year",
    "Humanitarian award (uncontested)",
    "Couple of the year",
    "Icon of exquisite family (uncontested)",
    "Mr. And miss. Exquisite (uncontested)",
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
          amount,
        };
        setNominations([...nominations, newNomination]);
        setNominee("");
        setCategory("");
        setTotal((total) => total + newNomination.amount);
        setAmount(1);
        setIsAdding(false);
      }, 300);
    }
  };

  const handleRemoveNomination = (id: number, amo: number) => {
    setNominations(nominations.filter((nomination) => nomination.id !== id));
    setTotal((total) => total - amo);
  };

  const handleViewProfile = (nomineeId: string) => {
    const profile = nominees.find((n) => n.id === nomineeId);
    setViewingProfile(profile || null);
  };

  const handleCloseProfile = () => {
    setViewingProfile(null);
  };

  const makePayment = () => {
    console.log(`Making payment ${total * 100}`);
    paymentSuccesful();
  };

  const paymentSuccesful = () => {
    console.log(nominations);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-slate-400 bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <img className="h-20 w-20" src="nfcs-logo.png" alt="nfcs logo" />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-1">Nox Amoris</h1>
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
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAddNomination}
              disabled={!nominee || !category || isAdding}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                !nominee || !category
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
                    <p className="text-sm text-blue-600">N{nom.amount * 100}</p>
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
                      onClick={() => handleRemoveNomination(nom.id, nom.amount)}
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
                <p>Total: N{total * 100}</p>
              </div>

              {/* make payment*/}
              <button
                onClick={makePayment}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-all ${
                  nominations === null
                    ? "bg-gray-400 cursor-not-allowed"
                    : isAdding
                    ? "bg-blue-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Make payment
              </button>
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
                    <p className="text-slate-700 font-medium">
                      {viewingProfile.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h1>fetched data</h1>
      </div>
    </div>
  );
}
