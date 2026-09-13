"use client";

import { useState, FormEvent } from "react";
import { useQuoteForm } from "./QuoteFormCOntext";

const cities = ["Bangalore", "Mysore", "Chennai", "Hyderabad", "Mumbai", "Other"];
const wings = ["Army Wing", "Navy Wing", "Air Wing"];
const strengths = ["Up to 50 cadets", "51–150 cadets", "151–300 cadets", "300+ cadets"];
const needs = ["Full uniform kit", "Uniform only", "Badges & accessories", "Shoes only"];
const sizeSample = ["Yes, send a sample set", "No, I know our sizes"];

export default function QuoteForm() {
  const [visible, setVisible] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const { close } = useQuoteForm();
  if (!visible) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="quote"
      className="relative rounded-xl border border-navy-100 bg-white p-5 card-shadow"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute right-3 top-3 text-navy-400 hover:text-navy-700"
      >
        ✕
      </button>

      <h3 className="text-lg font-extrabold text-navy-900">
        Get your NCC bulk quote
      </h3>
      <p className="mt-1 text-sm text-navy-600">
        Tell us about your NCC unit. We&apos;ll get back to you with
        availability and pricing.
      </p>

      {submitted ? (
        <div className="mt-6 rounded-md bg-green-50 border border-green-200 p-4 text-sm text-green-800">
          Thanks — your request has been received. Our team will reach out
          shortly with pricing.
        </div>
      ) : (
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <Field label="Name" required>
            <input
              required
              type="text"
              placeholder="Your name"
              className="form-input"
            />
          </Field>

          <Field label="School / College / Institution" required>
            <input
              required
              type="text"
              placeholder="Enter institution name"
              className="form-input"
            />
          </Field>

          <Field label="Phone Number" required>
            <input
              required
              type="tel"
              placeholder="Enter phone number"
              className="form-input"
            />
          </Field>

          <Field label="City" required>
            <select required defaultValue="" className="form-input">
              <option value="" disabled>
                Select city
              </option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="NCC Wing" required>
            <select required defaultValue="" className="form-input">
              <option value="" disabled>
                Select option
              </option>
              {wings.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="Approx. Cadet Strength" required>
            <select required defaultValue="" className="form-input">
              <option value="" disabled>
                Select option
              </option>
              {strengths.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="What do you need?" required>
            <select required defaultValue="" className="form-input">
              <option value="" disabled>
                Select option
              </option>
              {needs.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="Do you need a size sample set?" required>
            <select required defaultValue="" className="form-input">
              <option value="" disabled>
                Select option
              </option>
              {sizeSample.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="Additional Requirements">
            <textarea
              placeholder="Tell us more (optional)"
              rows={2}
              className="form-input resize-none"
            />
          </Field>

          <button type="submit" className="btn-gold w-full justify-center">
            Get My Bulk Quote →
          </button>

          <a
            href="https://wa.me/918847555555"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-green-700 hover:underline"
          >
            Or WhatsApp us directly
          </a>

          <p className="text-center text-xs text-navy-400">
            🔒 Your information is safe with us.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-navy-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}
