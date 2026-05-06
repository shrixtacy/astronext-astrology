"use client";

import { useState } from "react";
import Image from "next/image";

interface BookingSectionProps {
  shopifyUrl?: string;
}

export default function BookingSection({ shopifyUrl }: BookingSectionProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple mock data for calendar
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOffset = 3; // Starts on Thursday

  const timeSlots = [
    { time: "10:00 AM — 11:30 AM", status: "Available" },
    { time: "02:00 PM — 03:30 PM", status: "Available" },
    { time: "05:30 PM — 07:00 PM", status: "Booked" },
  ];

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <>
      {/* Booking Calendar UI */}
      <section id="booking-calendar" className="py-16 md:py-20 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary mb-6 md:mb-8">Choose Your Alignment</h2>
            <p className="text-on-surface-variant mb-8 md:mb-12">
              Select a date for your deep-dive session. All consultations are conducted via high-definition secure video link.
            </p>
            {/* Calendar UI */}
            <div className="bg-surface p-6 md:p-8 rounded-2xl shadow-xl border border-outline-variant/20">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-lg">October 2024</h4>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-outline-variant/20 transition">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-outline-variant/20 transition">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant/40 mb-4">
                <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {/* Empty slots for start of month */}
                {Array.from({ length: startDayOffset }).map((_, i) => (
                  <div key={`empty-${i}`} className="py-3 text-on-surface-variant/20">
                    {28 + i}
                  </div>
                ))}
                {/* Days */}
                {daysInMonth.map((day) => {
                  const isSelected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`py-3 rounded-lg font-bold transition-all ${
                        isSelected
                          ? "bg-primary-container text-on-primary-container shadow-md"
                          : "hover:bg-outline-variant/20"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container p-6 md:p-12 rounded-2xl flex flex-col justify-center">
            <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
              {selectedDate ? `Select a Time Slot (Oct ${selectedDate})` : "Select a Time Slot"}
            </h4>
            <div className="space-y-4">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                const isBooked = slot.status === "Booked";
                
                return (
                  <button
                    key={slot.time}
                    disabled={isBooked || !selectedDate}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`w-full py-4 px-6 rounded-xl border text-left flex justify-between items-center transition-all ${
                      isBooked
                        ? "bg-on-surface-variant/5 text-on-surface-variant/40 border-transparent cursor-not-allowed"
                        : isSelected
                        ? "bg-white shadow-md border-primary text-primary"
                        : "border-outline-variant hover:border-primary hover:text-primary disabled:opacity-50 disabled:hover:border-outline-variant disabled:hover:text-current"
                    }`}
                  >
                    <span className="font-bold">{slot.time}</span>
                    <span className="text-xs uppercase tracking-widest opacity-60">
                      {isSelected ? "Selected" : slot.status}
                    </span>
                  </button>
                );
              })}
            </div>
            {!selectedDate && (
              <p className="text-sm text-on-surface-variant/60 mt-4 text-center">
                Please select a date first.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-40 px-6 md:px-12 text-center bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl text-primary mb-8 md:mb-12 letter-spacing-tight">
            Your celestial blueprint is waiting.
          </h2>
          {selectedDate && selectedTime ? (
            <a
              href={shopifyUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-12 py-4 md:py-6 rounded-xl text-lg md:text-xl font-bold shadow-2xl transition-all mb-8 md:mb-12 bg-primary text-on-primary hover:scale-105 active:scale-95 inline-block"
            >
              Secure Your Consultation
            </a>
          ) : (
            <button
              onClick={() => document.getElementById('booking-calendar')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 md:px-12 py-4 md:py-6 rounded-xl text-lg md:text-xl font-bold shadow-2xl transition-all mb-8 md:mb-12 bg-outline-variant/30 text-on-surface-variant/60 hover:bg-outline-variant/50"
            >
              Select a Date &amp; Time
            </button>
          )}
          
          <div className="flex justify-center gap-6 md:gap-12 flex-wrap opacity-40">
            <Image
              alt="Visa"
              className="h-8 grayscale w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUco1Ho2E71I-zNFjZYQRYhsOx_hqefa3vYiRWOIHeUZg5E8SSiMaZcgnwH2kMeT8XFGpyQXTega9Xq6fnXuwuqVlWAPl9Ig5oTl6_NDjCpWuN6NjYEVNQdUkT85GLo6Aot5kQpQvGsdFE2pYHjmemBBFdxtBFO_8nhYhAxbg0Py8ZIbkWYljbXoVK6rplMo20RLP1EStuqAqgNZdWao597FOR7SilAnzYvP--FdK2GPGuiYbWKiSpfXKy14NKC1DZtc7OTXl4SP8"
              width={100}
              height={32}
              unoptimized
              style={{ height: 'auto' }}
            />
            <Image
              alt="Mastercard"
              className="h-8 grayscale w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtzWPlsl-j4Vk2wRhpWpxg1IAwMFkBwDIOqASkQOlF0nugCZNga__5JDx3XEHpk4eU0HeyzhRBBHexNGyNVLz4iYy4Bu9mvVsP6argl57_SQcl_y05I6RRH6E4bGgg9Azl-edkXGsUJ3Kvi-KaVn6NA9JaITmX_1w92O4_mlBgJWJCCZj9nvP00aRHSFG1dd4biWZLJfY_GvNTz1JSw8t5wB5JDJ4iUgRWHJEIEPJz36COp579ed4JL6HaFQyg_IrzCqV8FoZ4BfM"
              width={100}
              height={32}
              unoptimized
              style={{ height: 'auto' }}
            />
            <Image
              alt="Stripe"
              className="h-8 grayscale w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB74c5eBK7l9FH7vBAf9K69i7jUZvnfCFHosoFw6SI0kJtKiQQmeGpMrcUAOQbBbcOVrXDHV_zFiIXCMzkzjzubLpUpP_GSfi2v-DYCWkLeWyom0W_903GEboNOAANq60gRTPv_mlju8bQR2aoG0VkhLbZiQTHAHGhW9gAU7YpZ44h_qHgNm5OetwXjqmelf-Vxvzx6mqCxfFYIvC0Me9WNHMwMt8C-MVEq2lgKiF_HhxHd8e3rf5-4UvPrhSQhbVhIzgFLx4GMk_M"
              width={100}
              height={32}
              unoptimized
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-surface w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
            <button 
              onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center hover:bg-outline-variant/40 transition"
            >
              <span className="material-symbols-outlined text-on-surface">close</span>
            </button>
            
            {!isSuccess ? (
              <div className="p-6 md:p-10">
                <h3 className="text-2xl md:text-3xl text-primary font-serif mb-2">Finalize Booking</h3>
                <p className="text-on-surface-variant mb-6 md:mb-8 text-sm">
                  October {selectedDate}, 2024 at {selectedTime}
                </p>
                
                <div className="bg-primary-container/10 p-6 rounded-xl mb-6 md:mb-8 flex justify-between items-center border border-primary/10">
                  <div>
                    <div className="font-bold text-primary">Private Consultation</div>
                    <div className="text-xs text-primary/60 mt-1 uppercase tracking-widest">90 Minutes</div>
                  </div>
                  <div className="text-2xl font-serif text-primary">₹24,999</div>
                </div>
                
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-surface-container p-4 rounded-xl border border-transparent focus:border-primary focus:outline-none transition" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-surface-container p-4 rounded-xl border border-transparent focus:border-primary focus:outline-none transition" 
                      placeholder="Where should we send the invite?" 
                    />
                  </div>
                  <button type="submit" className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg mt-4 hover:opacity-90 transition shadow-lg">
                    Confirm & Proceed to Payment
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 md:p-16 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl text-on-secondary-container">check</span>
                </div>
                <h3 className="text-3xl md:text-4xl text-primary font-serif mb-4">Alignment Confirmed</h3>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  Your cosmic exploration is set for <strong>Oct {selectedDate}</strong> at <strong>{selectedTime}</strong>.<br/><br/>
                  A calendar invitation and detailed preparation guide have been sent to your email.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setIsSuccess(false); setSelectedDate(null); setSelectedTime(null); }}
                  className="mt-10 px-8 py-3 border border-outline-variant rounded-full text-sm font-bold uppercase tracking-widest hover:bg-surface-container transition"
                >
                  Return to Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
