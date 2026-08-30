import { ArrowUpRight, Check, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import contact from "../data/contact";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <main>
      {/* Hero */}
      <section>
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-purple)]">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Let's build something worth visiting.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {contact.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Contact Details */}
            <aside>
              <SectionHeading
                number="01"
                eyebrow="Get in Touch"
                title="Let's connect."
                description="Whether you're reaching out about a frontend opportunity, a website project, or simply want to connect, you can find me here."
              />

              <div className="mt-10 space-y-4">
                <ContactLinkCard
                  href={`mailto:${contact.email}`}
                  icon={<Mail size={18} />}
                  label="Email"
                  value={contact.email}
                  valueClassName="break-all"
                />

                <ContactLinkCard
                  href={contact.links.linkedin}
                  external
                  icon={<FaLinkedin size={18} />}
                  label="LinkedIn"
                  value="Connect with me"
                />

                <ContactLinkCard
                  href={contact.links.github}
                  external
                  icon={<FaGithub size={18} />}
                  label="GitHub"
                  value="View my code"
                />
              </div>

              {/* Availability */}
              <div className="mt-12">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                  Currently Open To
                </p>

                <ul className="mt-5 space-y-3">
                  {contact.availability.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <Check
                        size={16}
                        aria-hidden="true"
                        className="text-[var(--color-purple)]"
                      />

                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div>
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                  02 / Send a Message
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                  Tell me about your project.
                </h2>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />

                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <FormField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  textarea
                />

                {status === "success" && (
                  <div
                    role="status"
                    className="border border-[var(--color-purple)]/30 bg-[var(--color-purple)]/10 p-4 text-sm leading-6 text-[var(--color-text-secondary)]"
                  >
                    Thanks for reaching out. Your message has been sent
                    successfully.
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-[var(--color-text-secondary)]"
                  >
                    Something went wrong while sending your message. Please try
                    again or contact me directly by email.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  {!isSubmitting && <ArrowRightIcon aria-hidden="true" />}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  textarea = false,
}) {
  const fieldClasses =
    "mt-2 w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-purple)]";

  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium text-[var(--color-text)]"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-[var(--color-purple)]">
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={7}
          className={`${fieldClasses} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          className={fieldClasses}
        />
      )}
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
      className="h-4 w-4"
    >
      <path
        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactLinkCard({
  href,
  external = false,
  icon,
  label,
  value,
  valueClassName = "",
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors duration-200 hover:border-[var(--color-purple)]"
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-purple)]/10 text-[var(--color-purple-soft)]"
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {label}
        </span>

        <span
          className={`mt-1 block text-sm text-[var(--color-text)] ${valueClassName}`}
        >
          {value}
        </span>
      </span>

      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-purple)]"
      />
    </a>
  );
}

export default Contact;
