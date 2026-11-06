import { ArrowRight } from "lucide-react";
import { formLink } from "../lib/content";

/** Replaces the old inline lead form: the live site sends everyone to its Google Form. */
export function StartCard() {
  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_40px_70px_-40px_rgba(11,37,64,0.45)] sm:p-10">
      <h2 className="font-display text-[1.9rem] font-light leading-tight">
        Start Getting Paid to Care for your Family Today!
      </h2>
      <a {...formLink} className="med-btn med-btn-primary mt-8 w-full py-4">
        Start Getting Paid
        <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
      </a>
    </div>
  );
}
