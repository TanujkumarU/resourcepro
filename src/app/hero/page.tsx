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
  age: number;
  degree: string;
  branch: string;
  image: string;
  referralBy: string;
  referralId: string;
}

// 2️⃣ Members data with referral info
const membersData: Member[] = [
  { id: 1, name: "Arjun Reddy", email: "arjun@example.com", age: 25, degree: "B.Tech", branch: "CSE", image: "/candidates/arjun.jpg", referralBy: "Ramesh Kumar", referralId: "EMP001" },
  { id: 2, name: "Raghav Rao", email: "raghav@example.com", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/raghav.jpg", referralBy: "Sowmya Naik", referralId: "EMP002" },
  { id: 3, name: "Vikram Naik", email: "vikram@example.com", age: 28, degree: "B.Tech", branch: "ECE", image: "/candidates/vikram.jpg", referralBy: "Anjali Reddy", referralId: "EMP003" },
  { id: 4, name: "Sandeep Kumar", email: "sandeep@example.com", age: 27, degree: "M.Tech", branch: "CSE", image: "/candidates/sandeep.jpg", referralBy: "Bhavya Raju", referralId: "EMP004" },
  { id: 5, name: "Manoj Raju", email: "manoj@example.com", age: 29, degree: "B.Tech", branch: "EEE", image: "/candidates/manoj.jpg", referralBy: "Shreya Shetty", referralId: "EMP005" },
  { id: 6, name: "Nikhil Shetty", email: "nikhil@example.com", age: 30, degree: "M.Tech", branch: "IT", image: "/candidates/nikhil.jpg", referralBy: "Lakshmi Rao", referralId: "EMP006" },
  { id: 7, name: "Kiran Kumar", email: "kiran@example.com", age: 26, degree: "B.Tech", branch: "CSE", image: "/candidates/kiran.jpg", referralBy: "Deepa Gowda", referralId: "EMP007" },
  { id: 8, name: "Ramesh Gowda", email: "ramesh@example.com", age: 27, degree: "M.Tech", branch: "ECE", image: "/candidates/ramesh.jpg", referralBy: "Varsha Gowda", referralId: "EMP008" },
  { id: 9, name: "Harish Kumar", email: "harish@example.com", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/harish.jpg", referralBy: "Meera Kumar", referralId: "EMP009" },
  { id: 10, name: "Pradeep Rao", email: "pradeep@example.com", age: 29, degree: "M.Tech", branch: "IT", image: "/candidates/pradeep.jpg", referralBy: "Anjali Reddy", referralId: "EMP010" },
  // Females
  { id: 11, name: "Anjali Reddy", email: "anjali@example.com", age: 24, degree: "B.Tech", branch: "CSE", image: "/candidates/anjali.jpg", referralBy: "Raghav Rao", referralId: "EMP011" },
  { id: 12, name: "Sowmya Naik", email: "sowmya@example.com", age: 25, degree: "M.Tech", branch: "IT", image: "/candidates/sowmya.jpg", referralBy: "Nikhil Shetty", referralId: "EMP012" },
  { id: 13, name: "Ushaswi Pallem", email: "ushaswipallem@gmail.com", age: 23, degree: "B.Tech", branch: "EEE", image: "/candidates/priya.jpg", referralBy: "Tanuj_Kumar", referralId: "EMP613" },
  { id: 14, name: "Bhavya Raju", email: "bhavya@example.com", age: 27, degree: "M.Tech", branch: "CSE", image: "/candidates/bhavya.jpg", referralBy: "Sowmya Naik", referralId: "EMP014" },
  { id: 15, name: "Deepa Gowda", email: "deepa@example.com", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/deepa.jpg", referralBy: "Lakshmi Rao", referralId: "EMP015" },
  { id: 16, name: "Shreya Shetty", email: "shreya@example.com", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/shreya.jpg", referralBy: "Varsha Gowda", referralId: "EMP016" },
  { id: 17, name: "Lakshmi Rao", email: "lakshmi@example.com", age: 27, degree: "B.Tech", branch: "CSE", image: "/candidates/lakshmi.jpg", referralBy: "Meera Kumar", referralId: "EMP017" },
  { id: 18, name: "Meera Kumar", email: "meera@example.com", age: 25, degree: "M.Tech", branch: "ECE", image: "/candidates/meera.jpg", referralBy: "Pradeep Rao", referralId: "EMP018" },
  { id: 19, name: "Nandini Reddy", email: "nandini@example.com", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/nandini.jpg", referralBy: "Arjun Reddy", referralId: "EMP019" },
  { id: 20, name: "Varsha Gowda", email: "varsha@example.com", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/varsha.jpg", referralBy: "Harish Kumar", referralId: "EMP020" },
];

export default function Hero() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [filter, setFilter] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  const filteredMembers = membersData.filter((member) =>
    member.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleOpenPopup = (member: Member) => {
    setSelectedMember(member);
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2000);
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

              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={100}
                height={100}
                className={styles.candidateImage}
              />

              <h2>{selectedMember.name}</h2>
              <p><strong>Email:</strong> {selectedMember.email}</p>
              <p><strong>Age:</strong> {selectedMember.age}</p>
              <p><strong>Degree:</strong> {selectedMember.degree}</p>
              <p><strong>Branch:</strong> {selectedMember.branch}</p>
              <p><strong>Referred by:</strong> {selectedMember.referralBy} (ID: {selectedMember.referralId})</p>
              <button onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
