
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { Lock } from "lucide-react";
import { Calendar, Lightbulb } from "lucide-react";
//  import indiaMap from "../../assets/MataADsPackagesImg/SectionLocationHub.png";
const services = ["SEO", "ADS", "INFLUENCER", "UGC", "CGI"];
const budgets = ["< 50K", "50K-1L", "1L-5L", "5L+"];

const days = [
  { day: "MO", date: 12, disabled: true },
  { day: "TU", date: 13, disabled: true },
  { day: "WE", date: 14, disabled: false },
  { day: "TH", date: 15, disabled: false },
  { day: "FR", date: 16, disabled: false },
  { day: "SA", date: 17, disabled: false },
  { day: "SU", date: 18, disabled: false },
];
const times = ["10:00 AM", "11:30 AM", "02:00 PM"];
const locations = [
  { name: "LUDHIANA HQ", top: "22%", left: "48%", color: "hsl(240, 65%, 55%)", isHq: true },
  { name: "DELHI", top: "30%", left: "45%", color: "hsl(0, 84%, 60%)", isHq: false },
  { name: "MUMBAI", top: "52%", left: "30%", color: "hsl(0, 84%, 60%)", isHq: false },
  { name: "BANGALORE", top: "68%", left: "52%", color: "hsl(0, 84%, 60%)", isHq: false },
];

const ContactPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const toggleService = (s) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const gradientText = "text-[#4F46E5]"; 
  const btnBase = "px-8 py-3 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base";
  const btnOutline =
    `${btnBase} border border-slate-200 bg-white text-slate-900 hover:bg-slate-100`;
  const btnPrimary = `${btnBase} bg-indigo-500 text-white hover:opacity-90`;
  const btnWhatsapp = `${btnBase} bg-emerald-500 text-white hover:opacity-90`;
  const icon16 = "h-4 w-4";
  const icon20 = "h-5 w-5";

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 text-sm outline-none transition focus:border-indigo-500";
  const chipBase =
    "rounded-full border border-slate-200 bg-white px-3 py-2 text-[13px] font-semibold transition hover:bg-slate-100";
  const chipActive = "bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-500";

  return (
    <>
<section className="min-h-screen  flex items-center justify-center px-4 py-12">
      {/* Main Container Card */}
      <div className="w-full max-w-[1040px] bg-white rounded-[40px] px-6 py-16 md:py-24 text-center shadow-xl">
        
        {/* Title */}
        <h1 className="text-[36px] md:text-[56px] lg:text-[68px] font-extrabold tracking-tight text-[#111827] leading-[1.1] mb-6">
          Let&apos;s Build Your <span className="text-[#4F46E5]">Growth Engine</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-[720px] text-slate-500 text-[16px] md:text-[19px] leading-relaxed mb-12">
          Tell us your goals — we&apos;ll design a system that scales your business 
          through modern digital strategy.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Audit Button */}
          <a 
            href="#audit" 
            className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-100 rounded-2xl text-slate-900 font-bold text-[15px] shadow-sm hover:bg-slate-50 transition-all"
          >
            Get Free Audit
          </a>

          {/* Primary Book Call Button with the soft Glow */}
          <a 
            href="#book" 
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-2xl font-bold text-[15px] shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)] hover:scale-[1.02] transition-transform"
          >
            Book Call
          </a>

          {/* WhatsApp Button */}
          <a 
            href="#whatsapp" 
            className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#22c35e] transition-colors"
          >
            <MessageSquare size={20} fill="currentColor" stroke="none" />
            WhatsApp
          </a>
        </div>

        {/* Trust Badges / Stats */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
            1000+ Campaigns
          </div>

          <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            98% Success
          </div>

          <div className="flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="h-2 w-2 rounded-full bg-[#A855F7]" />
            ROI Focused
          </div>
        </div>
      </div>
    </section>

      {/* <section className="px-4 py-16">
        <div className="mx-auto max-w-[800px] rounded-3xl bg-white px-5 py-10 sm:px-10 sm:py-16">
          <h2 className="text-center text-[28px] font-extrabold sm:text-4xl">
            Start Your Strategy
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-500 sm:text-base">
            Fill in the details below and our growth hackers will reach out.
          </p>

          <form className="mt-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">Full Name</label>
                <input className={inputBase} placeholder="John Doe" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Business Email</label>
                <input className={inputBase} placeholder="john@company.com" type="email" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Phone Number</label>
                <input className={inputBase} placeholder="+91 98765 43210" type="tel" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Business Name</label>
                <input className={inputBase} placeholder="Enter Company" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">What are you looking for?</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {services.map((s) => {
                  const active = selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      className={`${chipBase} ${active ? chipActive : ""}`}
                      onClick={() => toggleService(s)}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Monthly Budget (INR)</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {budgets.map((b) => {
                  const active = selectedBudget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      className={`${chipBase} ${active ? chipActive : ""}`}
                      onClick={() => setSelectedBudget(b)}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Tell us about your goals</label>
              <textarea
                className={`${inputBase} min-h-[120px] resize-none`}
                placeholder="Briefly describe what success looks like for you..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-4 text-lg font-extrabold text-white transition hover:opacity-90"
            >
              GET MY STRATEGY
            </button>

            <p className="flex items-center justify-center gap-2 text-[13px] text-slate-500">
              <Lock className={icon16} />
              No spam. Your data is 100% secure.
            </p>
          </form>
        </div>
      </section> */}
      <StrategyForm />

      {/* <section className="px-4 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
              Personal Consultation
            </p>

            <h2 className="text-[32px] font-extrabold leading-tight sm:text-[44px]">
              Prefer a <span className={gradientText}>Direct</span> Call?
            </h2>

            <p className="mt-5 text-base text-slate-500 sm:text-lg">
              Sometimes a conversation is the fastest way to alignment. Schedule a 15-minute discovery call with our senior consultants.
            </p>

            <div className="mt-7 flex gap-3 rounded-xl bg-slate-50 p-4">
              <Lightbulb className={`${icon20} text-indigo-500`} />
              <div>
                <p className="text-sm font-bold">Need instant help?</p>
                <p className="mt-1 text-[13px] text-slate-500">
                  Use the CALL NOW button in the bottom bar for priority support.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <p className="text-lg font-bold">Select Date &amp; Time</p>
                <p className="mt-1 text-[13px] text-slate-500">Duration: 15 mins</p>
              </div>
              <Calendar className={icon20} />
            </div>

            <div className="mb-5 grid grid-cols-7 gap-2 text-center">
              {days.map((d) => {
                const dayActive = d.day === "WE" || d.day === "FR";
                const selected = selectedDate === d.date;
                return (
                  <div key={d.day}>
                    <p
                      className={`mb-1.5 text-xs ${dayActive ? "font-semibold text-indigo-500" : "opacity-50"}`}
                    >
                      {d.day}
                    </p>

                    <button
                      onClick={() => !d.disabled && setSelectedDate(d.date)}
                      disabled={d.disabled}
                      className={[
                        "h-10 w-10 rounded-full text-sm font-semibold transition",
                        d.disabled ? "cursor-not-allowed opacity-30" : "hover:bg-indigo-500/20",
                        selected ? "bg-indigo-500 text-white hover:bg-indigo-500" : "",
                      ].join(" ")}
                    >
                      {d.date}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {times.map((t) => {
                const selected = selectedTime === t;
                return (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={[
                      "rounded-full border px-3 py-2.5 text-sm font-semibold transition",
                      selected ? "border-indigo-500 bg-indigo-500 text-white" : "border-slate-200 bg-white hover:border-indigo-500",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <button className="w-full rounded-xl bg-slate-100 px-4 py-3.5 font-extrabold transition hover:bg-slate-200">
              Confirm Selection
            </button>
          </div>
        </div>
      </section> */}
<ConsultationSection />
 
      <section className="bg-slate-100 px-4 py-16">
        <h2 className="text-center text-[28px] font-extrabold sm:text-4xl">
          Presence Across India
        </h2>

        <div className="relative mx-auto mt-10 max-w-[900px] overflow-hidden rounded-2xl bg-white">
          <div className="relative aspect-[16/8] w-full">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center gap-1.5"
                style={{ top: loc.top, left: loc.left }}
              >
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: loc.color }} />

                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wider sm:text-[11px] ${
                    loc.isHq ? "text-white" : "bg-white/90 text-slate-900"
                  }`}
                  style={loc.isHq ? { background: loc.color } : {}}
                >
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> 

     <section className="px-4 py-20 lg:py-32 2xl:py-60">
  <div className="relative mx-auto max-w-[700px] lg:max-w-[1000px] 2xl:max-w-[1600px] overflow-hidden rounded-3xl 2xl:rounded-[60px] bg-white px-5 py-10 text-center sm:px-8 sm:py-16 lg:py-24 2xl:py-48">
    {/* Decorative Backgrounds - Scaled for 4K */}
    <div className="pointer-events-none absolute -left-5 -top-5 h-40 w-40 lg:h-64 lg:w-64 2xl:h-96 2xl:w-96 rounded-full bg-indigo-500/20" />
    <div className="pointer-events-none absolute right-8 top-8 h-48 w-48 lg:h-80 lg:w-80 2xl:h-[500px] 2xl:w-[500px] rounded-full bg-purple-500/15" />

    {/* Clamped font size: Min 32px, scales with width, Max 120px for 4K */}
    <h2 className="relative z-10 font-extrabold leading-tight text-[clamp(32px,5vw,120px)]">
      Ready to Grow?
    </h2>

    <div className="relative z-10 mt-8 lg:mt-12 2xl:mt-24 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 2xl:gap-8">
      <a 
        href="#get-audit" 
        className={`${btnOutline} w-full sm:w-auto 2xl:px-16 2xl:py-8 2xl:text-3xl 2xl:rounded-3xl`}
      >
        Get Free Audit
      </a>

      <a 
        href="#call" 
        className={`${btnBase} w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 2xl:px-16 2xl:py-8 2xl:text-3xl 2xl:rounded-3xl`}
      >
        Call Now
      </a>
    </div>
  </div>
</section> 

      {/* <ReadyToGrow /> */}

    </>
  );
};

export default ContactPage;



const StrategyForm = () => {
  const services = ["SEO", "ADS", "INFLUENCER", "UGC", "CGI"];
  const budgets = ["< 50K", "50K-1L", "1L-5L", "5L+"];
  
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  // ── Form field state ──
  const [fullName, setFullName]     = useState("");
  const [email, setEmail]           = useState("");
  const [phone, setPhone]           = useState("");
  const [company, setCompany]       = useState("");
  const [goals, setGoals]           = useState("");

  // ── Submission state ──
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [errorMsg, setErrorMsg]     = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const inputBase = "w-full rounded-xl bg-[#f1f4f9] border-none px-4 py-4 text-[#111827] placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 transition-all outline-none";
  const inputError = "w-full rounded-xl bg-red-50 border border-red-300 px-4 py-4 text-[#111827] placeholder:text-slate-400 focus:ring-2 focus:ring-red-400 transition-all outline-none";
  const chipBase = "px-4 py-3 rounded-xl bg-[#f1f4f9] text-[11px] font-bold uppercase tracking-wider text-slate-700 transition-all hover:bg-slate-200";
  const chipActive = "bg-indigo-600 text-white hover:bg-indigo-700";

  const toggleService = (s) => {
    setSelectedServices(prev => 
      prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]
    );
  };

  // ── Client-side validation ──
  const validate = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email";
    if (phone && !/^[0-9+\-\s()]{7,20}$/.test(phone)) errs.phone = "Enter a valid phone number";
    if (goals.length > 2000) errs.goals = "Message is too long (max 2000 chars)";
    return errs;
  };

  // ── Submit handler ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setFieldErrors({});

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      const { submitLead } = await import("../services/leadApi");
      await submitLead({
        name:               fullName.trim(),
        email:              email.trim(),
        phone:              phone.trim() || null,
        company:            company.trim() || null,
        service_interested: selectedServices.join(", ") || null,
        budget:             selectedBudget || null,
        message:            goals.trim()  || null,
      });

      setSubmitted(true);
      // Reset form fields
      setFullName(""); setEmail(""); setPhone(""); setCompany(""); setGoals("");
      setSelectedServices([]); setSelectedBudget("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success state ──
  if (submitted) {
    return (
      <section className="px-4 py-16 bg-[#fafafa]">
        <div className="mx-auto max-w-[850px] rounded-[40px] bg-white px-6 py-16 shadow-sm sm:px-16 sm:py-24 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <svg className="h-10 w-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[32px] font-black text-[#111827] sm:text-4xl">
            Strategy Request Received!
          </h2>
          <p className="mt-4 text-base text-slate-500 sm:text-lg font-medium max-w-md mx-auto">
            Our growth team will review your goals and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-2xl bg-gradient-to-r from-[#4461f2] to-[#8e44ff] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-95"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 bg-[#fafafa]">
      <div className="mx-auto max-w-[850px] rounded-[40px] bg-white px-6 py-12 shadow-sm sm:px-16 sm:py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-black text-[#111827] sm:text-4xl">
            Start Your Strategy
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base font-medium">
            Fill in the details below and our growth hackers will reach out.
          </p>
        </div>

        {/* Global error banner */}
        {errorMsg && (
          <div className="mb-8 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-700 font-medium">
            {errorMsg}
          </div>
        )}

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          
          {/* Input Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2.5 block text-[13px] font-bold text-[#374151] ml-1">Full Name <span className="text-red-400">*</span></label>
              <input
                className={fieldErrors.fullName ? inputError : inputBase}
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {fieldErrors.fullName && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{fieldErrors.fullName}</p>}
            </div>

            <div>
              <label className="mb-2.5 block text-[13px] font-bold text-[#374151] ml-1">Business Email <span className="text-red-400">*</span></label>
              <input
                className={fieldErrors.email ? inputError : inputBase}
                placeholder="john@company.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {fieldErrors.email && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{fieldErrors.email}</p>}
            </div>

            <div>
              <label className="mb-2.5 block text-[13px] font-bold text-[#374151] ml-1">Phone Number</label>
              <input
                className={fieldErrors.phone ? inputError : inputBase}
                placeholder="+91 98765 43210"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {fieldErrors.phone && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{fieldErrors.phone}</p>}
            </div>

            <div>
              <label className="mb-2.5 block text-[13px] font-bold text-[#374151] ml-1">Business Name</label>
              <input
                className={inputBase}
                placeholder="Enter Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="mb-3 block text-[13px] font-bold text-[#374151] ml-1">What are you looking for?</label>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {services.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${chipBase} ${selectedServices.includes(s) ? chipActive : ""} sm:flex-1`}
                  onClick={() => toggleService(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Selection */}
          <div>
            <label className="mb-3 block text-[13px] font-bold text-[#374151] ml-1">Monthly Budget (INR)</label>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`${chipBase} ${selectedBudget === b ? chipActive : ""} sm:flex-1`}
                  onClick={() => setSelectedBudget(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="mb-2.5 block text-[13px] font-bold text-[#374151] ml-1">Tell us about your goals</label>
            <textarea
              className={fieldErrors.goals ? `${inputError} min-h-[140px] resize-none pt-4` : `${inputBase} min-h-[140px] resize-none pt-4`}
              placeholder="Briefly describe what success looks like for you..."
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
            {fieldErrors.goals && <p className="mt-1.5 ml-1 text-xs text-red-500 font-medium">{fieldErrors.goals}</p>}
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full rounded-2xl bg-gradient-to-r from-[#4461f2] to-[#8e44ff] px-4 py-5 text-base font-black text-white shadow-[0_15px_30px_-5px_rgba(68,97,242,0.4)] transition-all ${
                submitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:scale-[1.01] active:scale-95"
              }`}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting…
                </span>
              ) : (
                "GET MY STRATEGY"
              )}
            </button>
            
            <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
              <Lock size={12} strokeWidth={3} />
              No spam. Your data is 100% secure.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};



const ConsultationSection = () => {
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const days = [
    { day: "MO", date: 12, disabled: true },
    { day: "TU", date: 13, disabled: true },
    { day: "WE", date: 14, disabled: false },
    { day: "TH", date: 15, disabled: false },
    { day: "FR", date: 16, disabled: false },
    { day: "SA", date: 17, disabled: false },
    { day: "SU", date: 18, disabled: false },
  ];

  const times = ["10:00 AM", "11:30 AM", "02:00 PM"];

  return (
    <section className="px-4 py-16 bg-[#f8f9fc]">
      <div className="mx-auto grid max-w-[1150px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/* Left Content */}
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#3B82F6]">
            Personal Consultation
          </p>

          <h2 className="text-[36px] font-black leading-tight text-[#111827] sm:text-[52px]">
            Prefer a <span className="text-[#4F46E5]">Direct</span> Call?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-[18px]">
            Sometimes a conversation is the fastest way to alignment. Schedule a 15-minute discovery call with our senior consultants.
          </p>

          <div className="mt-10 flex gap-4 rounded-[20px] bg-white border border-slate-100 p-6 shadow-sm max-w-[480px]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
              <Lightbulb className="h-5 w-5 text-[#3B82F6]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#111827]">Need instant help?</p>
              <p className="mt-1 text-[14px] text-slate-500">
                Use the CALL NOW button in the bottom bar for priority support.
              </p>
            </div>
          </div>
        </div>

        {/* Right Booking Card */}
        <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-slate-200/60 border border-slate-100">
          <div className="bg-[#0f172a] p-8 text-white flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">Select Date & Time</h3>
              <p className="mt-1 text-sm text-slate-400">Duration: 15 mins</p>
            </div>
            <Calendar className="h-6 w-6 text-slate-400" />
          </div>

          <div className="p-8">
            {/* Calendar Grid */}
            <div className="mb-10 grid grid-cols-7 gap-1">
              {days.map((d) => {
                const isSelected = selectedDate === d.date;
                return (
                  <div key={d.day} className="text-center">
                    <p className={`mb-4 text-[11px] font-bold uppercase tracking-widest ${d.disabled ? 'text-slate-200' : 'text-slate-400'}`}>
                      {d.day}
                    </p>
                    <button
                      disabled={d.disabled}
                      onClick={() => setSelectedDate(d.date)}
                      className={`h-10 w-full max-w-[40px] mx-auto rounded-xl text-sm font-bold transition-all
                        ${isSelected 
                          ? "bg-[#ebf2ff] text-[#3B82F6]" 
                          : d.disabled 
                            ? "text-slate-200 cursor-not-allowed" 
                            : "text-slate-400 hover:bg-slate-50"
                        }`}
                    >
                      {d.date}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Time Grid */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {times.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`rounded-xl border py-3.5 text-[13px] font-bold transition-all ${
                    selectedTime === t 
                    ? "border-[#0052cc] bg-[#0052cc] text-white shadow-lg shadow-blue-200" 
                    : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <button className="w-full rounded-2xl bg-[#0f172a] py-5 text-base font-black text-white transition-all hover:bg-[#1e293b] active:scale-[0.98]">
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// const PresenceAcrossIndia = () => {
//   const locations = [
//     { name: "LUDHIANA HQ", top: "28%", left: "52%", isHq: true },
//     { name: "DELHI", top: "42%", left: "50%", isHq: false },
//     { name: "MUMBAI", top: "62%", left: "32%", isHq: false },
//     { name: "BANGALORE", top: "78%", left: "62%", isHq: false },
//   ];

//   return (
//     <section className="bg-[#f0f7ff] px-4 py-20">
//       {/* Section Heading */}
//       <h2 className="mb-12 text-center text-[28px] font-extrabold tracking-tight text-[#111827] sm:text-4xl">
//         Presence Across India
//       </h2>

//       {/* Map Container */}
//       <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[40px] bg-slate-200 shadow-sm border border-white/20">
        
//         {/* Map Background Layer */}
//         <div className="relative aspect-[16/9] w-full md:aspect-[16/8] flex items-center justify-center overflow-hidden">
          
//           {/* Map Image - Using a clean SVG-style map to match UI */}
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/e/e8/India_map_blank.svg" 
//             alt="India Map" 
//             className="absolute inset-0 h-full w-full object-contain p-10 opacity-20 grayscale transition-all hover:opacity-30"
//           />

//           {/* UI Gradients - This creates the 'fading into white' look from the image */}
//           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-transparent to-transparent opacity-60" />

//           {/* Location Badges */}
//           <div className="absolute inset-0 z-10">
//             {locations.map((loc) => (
//               <div
//                 key={loc.name}
//                 className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 active:scale-95 duration-200"
//                 style={{ top: loc.top, left: loc.left }}
//               >
//                 <div
//                   className={`flex items-center gap-2 rounded-full px-4 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.12)] border whitespace-nowrap ${
//                     loc.isHq 
//                       ? "bg-[#0052cc] text-white border-blue-400/20" 
//                       : "bg-white/95 text-[#111827] border-white"
//                   }`}
//                 >
//                   {/* Status Dot */}
//                   <span 
//                     className={`h-2 w-2 shrink-0 rounded-full ${
//                       loc.isHq ? "bg-white" : "bg-[#ff3e3e]"
//                     }`} 
//                   />

//                   <span className="text-[10px] font-black tracking-tight sm:text-[12px]">
//                     {loc.name}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


const ReadyToGrow = () => {
  // Enhanced base button with scale and 4K optimizations
  const btnBase = "px-8 py-4 2xl:px-12 2xl:py-6 rounded-2xl font-bold text-[15px] 2xl:text-[22px] transition-all duration-300 flex items-center justify-center min-w-[180px] 2xl:min-w-[280px]";
  
  return (
    <section className="px-4 py-20 2xl:py-40 bg-white w-full">
      {/* - max-w scales up to 1400px for 4K
          - rounded corners scale for larger viewports 
      */}
      <div className="relative mx-auto max-w-[700px] lg:max-w-[900px] 2xl:max-w-[1400px] overflow-hidden rounded-[40px] 2xl:rounded-[80px] bg-white px-6 py-16 lg:py-24 2xl:py-40 text-center shadow-sm border border-slate-50">
        
        {/* Animated Background Glows - Scaled for 4K */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[300px] w-[300px] 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-blue-50/60 blur-[100px] 2xl:blur-[200px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] 2xl:h-[600px] 2xl:w-[600px] rounded-full bg-purple-50/60 blur-[100px] 2xl:blur-[200px]" />

        {/* Title using clamped text: 
            Min 40px, Scales with viewport, Max 110px for 4K 
        */}
        <h2 className="relative z-10 font-black tracking-tight text-[#111827] text-[clamp(40px,6vw,110px)] leading-[1.1]">
          Ready to Grow?
        </h2>

        {/* Action Buttons */}
        <div className="relative z-10 mt-10 2xl:mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 2xl:gap-10">
          
          {/* Get Free Audit */}
          <a 
            href="#get-audit" 
            className={`${btnBase} bg-white text-[#111827] border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-slate-50 hover:shadow-md`}
          >
            Get Free Audit
          </a>

          {/* Call Now - Signature Gradient */}
          <a 
            href="#call" 
            className={`${btnBase} bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.5)] hover:scale-[1.05] active:scale-95`}
          >
            Call Now
          </a>
          
        </div>
      </div>
    </section>
  );
};

