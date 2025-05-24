
import React from "react";

export default function NabbdhLandingPage() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>نبض</h1>
        <p style={{ fontSize: "1.25rem", color: "#ccc" }}>منصتك العربية للتعبير، الإبداع، والرسالة المختصرة</p>
      </header>
      <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>لماذا نبض؟</h2>
        <p style={{ color: "#ccc", fontSize: "1.1rem" }}>
          المحتوى العربي يستحق منصة تُقدّر العمق وتُشجّع على التعبير الصادق. نبض ليست مجرد منصة فيديو، بل مساحة لكل شخص لديه رسالة أو إحساس أو فكرة.
        </p>
      </section>
    </div>
  );
}
