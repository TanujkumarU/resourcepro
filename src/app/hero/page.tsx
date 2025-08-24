"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

// 1️⃣ Define TypeScript interface
interface Member {
  id: number;
  name: string;
  email: string;
  role: string;
  age: number;
  degree: string;
  branch: string;
  image: string;
}

// 2️⃣ Members data (same as before)
const membersData: Member[] = [
  { id: 1, name: "Arjun Reddy", email: "arjun@example.com", role: "Developer", age: 25, degree: "B.Tech", branch: "CSE", image: "/candidates/arjun.jpg" },
  { id: 2, name: "Raghav Rao", email: "raghav@example.com", role: "Designer", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/raghav.jpg" },
  { id: 3, name: "Vikram Naik", email: "vikram@example.com", role: "Manager", age: 28, degree: "B.Tech", branch: "ECE", image: "/candidates/vikram.jpg" },
  { id: 4, name: "Sandeep Kumar", email: "sandeep@example.com", role: "Developer", age: 27, degree: "M.Tech", branch: "CSE", image: "/candidates/sandeep.jpg" },
  { id: 5, name: "Manoj Raju", email: "manoj@example.com", role: "Support", age: 29, degree: "B.Tech", branch: "EEE", image: "/candidates/manoj.jpg" },
  { id: 6, name: "Nikhil Shetty", email: "nikhil@example.com", role: "HR", age: 30, degree: "M.Tech", branch: "IT", image: "/candidates/nikhil.jpg" },
  { id: 7, name: "Kiran Kumar", email: "kiran@example.com", role: "Developer", age: 26, degree: "B.Tech", branch: "CSE", image: "/candidates/kiran.jpg" },
  { id: 8, name: "Ramesh Gowda", email: "ramesh@example.com", role: "Designer", age: 27, degree: "M.Tech", branch: "ECE", image: "/candidates/ramesh.jpg" },
  { id: 9, name: "Harish Kumar", email: "harish@example.com", role: "Manager", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/harish.jpg" },
  { id: 10, name: "Pradeep Rao", email: "pradeep@example.com", role: "Support", age: 29, degree: "M.Tech", branch: "IT", image: "/candidates/pradeep.jpg" },
  { id: 11, name: "Anjali Reddy", email: "anjali@example.com", role: "Designer", age: 24, degree: "B.Tech", branch: "CSE", image: "/candidates/anjali.jpg" },
  { id: 12, name: "Sowmya Naik", email: "sowmya@example.com", role: "HR", age: 25, degree: "M.Tech", branch: "IT", image: "/candidates/sowmya.jpg" },
  { id: 13, name: "Ushaswi Pallem", email: "ushaswipallem@gmail.com", role: "Developer", age: 23, degree: "B.Tech", branch: "EEE", image: "/candidates/priya.jpg" },
  { id: 14, name: "Bhavya Raju", email: "bhavya@example.com", role: "Support", age: 27, degree: "M.Tech", branch: "CSE", image: "/candidates/bhavya.jpg" },
  { id: 15, name: "Deepa Gowda", email: "deepa@example.com", role: "HR", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/deepa.jpg" },
  { id: 16, name: "Shreya Shetty", email: "shreya@example.com", role: "Designer", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/shreya.jpg" },
  { id: 17, name: "Lakshmi Rao", email: "lakshmi@example.com", role: "Developer", age: 27, degree: "B.Tech", branch: "CSE", image: "/candidates/lakshmi.jpg" },
  { id: 18, name: "Meera Kumar", email: "meera@example.com", role: "Support", age: 25, degree: "M.Tech", branch: "ECE", image: "/candidates/meera.jpg" },
  { id: 19, name: "Nandini Reddy", email: "nandini@example.com", role: "HR", age: 28, degree: "B.Tech", branch: "EEE", image: "/candidates/nandini.jpg" },
  { id: 20, name: "Varsha Gowda", email: "varsha@example.com", role: "Designer", age: 26, degree: "M.Tech", branch: "IT", image: "/candidates/varsha.jpg" },
];

export default function Hero() {
  // 3️⃣ Type the states
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [filter, setFilter] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);

  const filteredMembers = membersData.filter((member) =>
    member.name.toLowerCase().includes(filter.toLowerCase())
  );

  // 4️⃣ Type the function parameter
  const handleOpenPopup = (member: Member) => {
    setSelectedMember(member);
    setShowCongrats(true);
    setTimeout(() => setShowCongrats(false), 2000);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to ResourcePro</h1>
        <p>
          We are celebrating our 16-time recognition as the fastest-growing
          company! From Oct 1 to Oct 7, 20 lucky members will enjoy a free
          trip to Pondicherry.
        </p>
        <p>
          ResourcePro has been leading innovation in resource management and
          productivity solutions for the past decade. We thank our employees for
          their hard work and dedication!
        </p>

        <input
          type="text"
          placeholder="Filter members by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <ul className={styles.membersList}>
          {filteredMembers.map((member: Member) => (
            <li
              key={member.id}
              className={styles.memberItem}
              onClick={() => handleOpenPopup(member)}
            >
              {member.name}
            </li>
          ))}
        </ul>

        {selectedMember && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              {showCongrats && <div className={styles.congrats}>🎉 Congratulations! 🎉</div>}

              {/* Use Next.js Image for optimization */}
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={100}
                height={100}
                className={styles.candidateImage}
              />

              <h2>{selectedMember.name}</h2>
              <p><strong>Email:</strong> {selectedMember.email}</p>
              {/* <p><strong>Role:</strong> {selectedMember.role}</p> */}
              <p><strong>Age:</strong> {selectedMember.age}</p>
              <p><strong>Degree:</strong> {selectedMember.degree}</p>
              <p><strong>Branch:</strong> {selectedMember.branch}</p>
              <button onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
