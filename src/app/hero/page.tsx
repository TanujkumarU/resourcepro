"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />


// 1️⃣ Define TypeScript interface
interface Member {
  id: number;
  name: string;
  email: string;
  degree: string;
  branch: string;
  image: string;
  referralBy: string;
  referralId: string;
  address: string;
  aadhar: string;
  mobile: string;
}

// 2️⃣ Members data with referral info
const membersData: Member[] = [
  {
    id: 1,
    name: "Arjun Reddy",
    email: "arjun@example.com",
    degree: "B.Tech",
    branch: "CSE",
    image: "/candidates/arjun.jpg",
    referralBy: "Ramesh Kumar",
    referralId: "EMP001",
    address: "Hyderabad, Telangana",
    aadhar: "XXXX-XXXX-1234",
    mobile: "9876543210",
  },
  {
    id: 2,
    name: "Raghav Rao",
    email: "raghav@example.com",
    degree: "M.Tech",
    branch: "IT",
    image: "/candidates/raghav.jpg",
    referralBy: "Sowmya Naik",
    referralId: "EMP002",
    address: "Bangalore, Karnataka",
    aadhar: "XXXX-XXXX-5678",
    mobile: "9876501234",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@example.com",
    degree: "MBA",
    branch: "Finance",
    image: "/candidates/priya.jpg",
    referralBy: "Anil Mehta",
    referralId: "EMP003",
    address: "Mumbai, Maharashtra",
    aadhar: "XXXX-XXXX-2234",
    mobile: "9812345678",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram@example.com",
    degree: "B.Com",
    branch: "Accounts",
    image: "/candidates/vikram.jpg",
    referralBy: "Deepa Menon",
    referralId: "EMP004",
    address: "Delhi, India",
    aadhar: "XXXX-XXXX-3345",
    mobile: "9823456789",
  },
  {
    id: 5,
    name: "Ananya Gupta",
    email: "ananya@example.com",
    degree: "B.Sc",
    branch: "Biotech",
    image: "/candidates/ananya.jpg",
    referralBy: "Kiran Rao",
    referralId: "EMP005",
    address: "Chennai, Tamil Nadu",
    aadhar: "XXXX-XXXX-4456",
    mobile: "9834567890",
  },
  {
    id: 6,
    name: "Karthik Iyer",
    email: "karthik@example.com",
    degree: "B.Tech",
    branch: "ECE",
    image: "/candidates/karthik.jpg",
    referralBy: "Naveen Prasad",
    referralId: "EMP006",
    address: "Kochi, Kerala",
    aadhar: "XXXX-XXXX-5567",
    mobile: "9845678901",
  },
  {
    id: 7,
    name: "Sneha Nair",
    email: "sneha@example.com",
    degree: "MCA",
    branch: "Software",
    image: "/candidates/sneha.jpg",
    referralBy: "Sanjay Das",
    referralId: "EMP007",
    address: "Trivandrum, Kerala",
    aadhar: "XXXX-XXXX-6678",
    mobile: "9856789012",
  },
  {
    id: 8,
    name: "Rahul Verma",
    email: "rahul@example.com",
    degree: "BBA",
    branch: "Management",
    image: "/candidates/rahul.jpg",
    referralBy: "Ashok Pillai",
    referralId: "EMP008",
    address: "Jaipur, Rajasthan",
    aadhar: "XXXX-XXXX-7789",
    mobile: "9867890123",
  },
  {
    id: 9,
    name: "Neha Kapoor",
    email: "neha@example.com",
    degree: "M.Tech",
    branch: "AI",
    image: "/candidates/neha.jpg",
    referralBy: "Tarun Sethi",
    referralId: "EMP009",
    address: "Pune, Maharashtra",
    aadhar: "XXXX-XXXX-8890",
    mobile: "9878901234",
  },
  {
    id: 10,
    name: "Siddharth Malhotra",
    email: "siddharth@example.com",
    degree: "B.Tech",
    branch: "Mechanical",
    image: "/candidates/sid.jpg",
    referralBy: "Nikhil Jain",
    referralId: "EMP010",
    address: "Lucknow, UP",
    aadhar: "XXXX-XXXX-9901",
    mobile: "9889012345",
  },
  {
    id: 11,
    name: "Divya Ramesh",
    email: "divya@example.com",
    degree: "B.Sc",
    branch: "Mathematics",
    image: "/candidates/divya.jpg",
    referralBy: "Rajesh Patel",
    referralId: "EMP011",
    address: "Ahmedabad, Gujarat",
    aadhar: "XXXX-XXXX-1112",
    mobile: "9890123456",
  },
  {
    id: 12,
    name: "Amit Mishra",
    email: "amit@example.com",
    degree: "MBA",
    branch: "Marketing",
    image: "/candidates/amit.jpg",
    referralBy: "Meera Joshi",
    referralId: "EMP012",
    address: "Kanpur, UP",
    aadhar: "XXXX-XXXX-1213",
    mobile: "9901234567",
  },
  {
    id: 13,
    name: "Ushaswi Pallem",
    email: "ushaswipallem@gmail.com",
    degree: "B.Tech",
    branch: "EEE",
    image: "/ush.png",
    referralBy: "Tanuj_Kumar",
    referralId: "EMP613",
    address: "D.No - 5/99, railway station road, near sarada school, Annavaram, Pin:-533406 , Andhra Pradesh",
    aadhar: "4459-0416-9491",
    mobile: "9959662393",
  },
  {
    id: 14,
    name: "Harini Menon",
    email: "harini@example.com",
    degree: "MCA",
    branch: "Data Science",
    image: "/candidates/harini.jpg",
    referralBy: "Arvind Rao",
    referralId: "EMP014",
    address: "Coimbatore, Tamil Nadu",
    aadhar: "XXXX-XXXX-1314",
    mobile: "9912345678",
  },
  {
    id: 15,
    name: "Mohit Chawla",
    email: "mohit@example.com",
    degree: "B.Tech",
    branch: "Civil",
    image: "/candidates/mohit.jpg",
    referralBy: "Suresh Menon",
    referralId: "EMP015",
    address: "Nagpur, Maharashtra",
    aadhar: "XXXX-XXXX-1415",
    mobile: "9923456789",
  },
  {
    id: 16,
    name: "Shreya Sen",
    email: "shreya@example.com",
    degree: "MBA",
    branch: "HR",
    image: "/candidates/shreya.jpg",
    referralBy: "Pooja Nair",
    referralId: "EMP016",
    address: "Kolkata, West Bengal",
    aadhar: "XXXX-XXXX-1516",
    mobile: "9934567890",
  },
  {
    id: 17,
    name: "Aditya Sharma",
    email: "aditya@example.com",
    degree: "M.Tech",
    branch: "Robotics",
    image: "/candidates/aditya.jpg",
    referralBy: "Varun Khanna",
    referralId: "EMP017",
    address: "Chandigarh",
    aadhar: "XXXX-XXXX-1617",
    mobile: "9945678901",
  },
  {
    id: 18,
    name: "Lakshmi Priya",
    email: "lakshmi@example.com",
    degree: "B.Sc",
    branch: "Chemistry",
    image: "/candidates/lakshmi.jpg",
    referralBy: "Ravi Teja",
    referralId: "EMP018",
    address: "Vijayawada, Andhra Pradesh",
    aadhar: "XXXX-XXXX-1718",
    mobile: "9956789012",
  },
  {
    id: 19,
    name: "Naveen Kumar",
    email: "naveen@example.com",
    degree: "B.Tech",
    branch: "IT",
    image: "/candidates/naveen.jpg",
    referralBy: "Anusha Rao",
    referralId: "EMP019",
    address: "Hyderabad, Telangana",
    aadhar: "XXXX-XXXX-1819",
    mobile: "9967890123",
  },
  {
    id: 20,
    name: "Pooja Mehta",
    email: "pooja@example.com",
    degree: "MCA",
    branch: "Cloud Computing",
    image: "/candidates/pooja.jpg",
    referralBy: "Ganesh Patil",
    referralId: "EMP020",
    address: "Bhopal, MP",
    aadhar: "XXXX-XXXX-1920",
    mobile: "9978901234",
  },
];

export default function Hero() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [filter, setFilter] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  // 🔑 New states for code verification
  const [enteredCode, setEnteredCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const filteredMembers = membersData.filter((member) =>
    member.name.toLowerCase().includes(filter.toLowerCase())
  );

  // When clicking member → show popup with code input first
  const handleOpenPopup = (member: Member) => {
    setSelectedMember(member);
    setIsVerified(false); // reset verification
    setEnteredCode("");   // reset code input
  };

  // Verify code (for simplicity: match referralId)
  const handleVerifyCode = () => {
    if (enteredCode === selectedMember?.referralId) {
      setIsVerified(true);
      setShowCongrats(true);
      setTimeout(() => setShowCongrats(false), 2000);
    } else {
      alert("❌ Invalid code. Try again.");
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        {/* Company logo */}
        <Image
          src="/mega.png"
          alt="ResourcePro Logo"
          width={120}
          height={120}
          className={styles.heroLogo}
        />

        <h1>Welcome to ResourcePro</h1>

        <input
          type="text"
          placeholder="Filter members by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <ul className={styles.membersList}>
          {filteredMembers.map((member) => (
            <li
              key={member.id}
              className={styles.memberItem}
              onClick={() => handleOpenPopup(member)}
            >
              {member.name}
            </li>
          ))}
        </ul>

{/* Extended Description */}
<p>
  We are excited to announce a special training programme in Pondicherry from Oct 1 to Oct 7. 
  This programme is exclusively for candidates referred by our employees.
</p>
<p>
  All participants will be accommodated in comfortable rooms and cottages fully managed by the company. 
  Our aim is to provide a stress-free and productive environment for learning.
</p>
<p>
  The training sessions will cover the latest trends in resource management, productivity tools, and teamwork strategies. 
  Participants will gain hands-on experience with real-world projects.
</p>
<p>
  In addition to professional training, there will be team-building activities and group discussions to foster collaboration. 
  This will help candidates build strong networks within the company.
</p>
<p>
  Our experienced mentors will provide guidance, feedback, and personal development tips to help candidates excel in their careers. 
  Each participant will receive individual attention.
</p>
<p>
  The training programme also includes workshops on problem-solving, communication skills, and leadership qualities, 
  preparing candidates to become future leaders within the organization.
</p>
<p>
  At ResourcePro, we value innovation, learning, and employee growth. This initiative is part of our commitment to nurturing talent 
  and recognizing the contributions of our employees through referrals.
</p>
<p>
  Certificates of completion and recognition awards will be provided to all participants, celebrating their achievements and dedication. 
  This is also a chance to experience the vibrant culture of ResourcePro first-hand.
</p>
<p>
  We look forward to welcoming our referred candidates to this immersive experience, which promises growth, learning, and lifelong memories. 
  Join us in Pondicherry and be part of a transformative journey with ResourcePro!
</p>

      

        {selectedMember && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              {showCongrats && (
                <div className={styles.congrats}>🎉 Congratulations! 🎉</div>
              )}

              {/* Step 1: Ask for code before showing details */}
              {!isVerified ? (
                <>
                  <h2>Enter Verification Code</h2>
                  <input
                    type="text"
                    placeholder="Enter referral ID"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                  />
                  <button onClick={handleVerifyCode}>Verify</button>
                  <button onClick={() => setSelectedMember(null)}>Cancel</button>
                </>
              ) : (
                <>
                  {/* Step 2: Show member details after correct code */}
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    width={100}
                    height={100}
                    className={styles.candidateImage}
                  />

                  <h2>{selectedMember.name}</h2>
                  <p><strong>Email:</strong> {selectedMember.email}</p>
                  <p><strong>Mobile:</strong> {selectedMember.mobile}</p>
                  <p><strong>Aadhaar:</strong> {selectedMember.aadhar}</p>
                  <p><strong>Address:</strong> {selectedMember.address}</p>
                  <p><strong>Degree:</strong> {selectedMember.degree}</p>
                  <p><strong>Branch:</strong> {selectedMember.branch}</p>
<p><strong>Referred by:</strong> {selectedMember.referralBy} (ID: {selectedMember.referralId})</p>
                  <button onClick={() => setSelectedMember(null)}>Close</button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
