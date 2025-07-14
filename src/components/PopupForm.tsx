"use client";

import { FormEvent } from "react";

type PopupDialogProps = {
  id: string;
  onClose: () => void;
};

export default function PopupForm({ id, onClose }: PopupDialogProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key !== "consent") {
        data[key] = value;
      }
    });

    try {
      const res = await fetch(
        "https://healthmedneeds.com/api/squad-medical-supplies",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      console.log(result);
      console.log("Submitting:", data);

      if (result.success) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error occurred.");
    }
  };

  return (
    <div className="braceDialog" id={id}>
      <div className="content">
        <button className="close" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit} method="post" id="contactUs">
          <h2>Get Your Desired Product or Sevice</h2>
          <p>
            Enter your information below in this quick profile to check your
            eligibility.
          </p>
          <div className="stage">
            <div className="field">
              <label htmlFor="fname">First Name:</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div className="field">
              <label htmlFor="lname">Last Name:</label>
              <input type="text" name="lname" id="lname" />
            </div>
          </div>
          <div className="stage">
            <div className="field">
              <label htmlFor="zip_code">Zip:</label>
              <input type="text" name="zip_code" id="zip_code" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone no:</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>
          <div className="stage">
            <div className="field">
              <label htmlFor="dob">Date Of Birth:</label>
              <input type="date" name="dob" id="dob" />
            </div>
            <div className="field">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message"></textarea>
            </div>
          </div>
          <div
            className="field consentField"
            style={{ alignItems: "baseline" }}
          >
            <input type="checkbox" name="consent" id="consent" />
            <p>
              By tapping the &quot;Submit&quot; button, I expressly endorse
              Squad Medical Supply to call me or send me recorded messages or
              messages about their Supplies, or other Clinical things using
              electronic advancement to my telephone/cell number I entered
              already. I understand that I am not supposed to give my consent as
              a condition of any purchase.
            </p>
          </div>
          <button name="submit">See If I Qualify</button>
        </form>
      </div>
    </div>
  );
}
