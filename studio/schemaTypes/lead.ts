import { defineField, defineType } from "sanity";

/**
 * One document type: "Lead". Created by the website's eligibility form, never by hand.
 * Fields are read-only so a lead can't be edited by accident.
 *
 * Privacy: the website saves each lead as an unpublished draft. Drafts are not visible
 * to the public Sanity API, so names and phone numbers stay private. Do NOT press
 * Publish on a lead: published documents in this dataset can be read by anyone.
 */
export const lead = defineType({
  name: "lead",
  title: "Lead (Michigan form)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full name", type: "string", readOnly: true }),
    defineField({ name: "phone", title: "Phone number", type: "string", readOnly: true }),
    defineField({ name: "submittedAt", title: "Received", type: "datetime", readOnly: true }),
    defineField({ name: "source", title: "Form", type: "string", readOnly: true }),
    defineField({
      name: "pageUrl",
      title: "Page address (shows the ad campaign, if any)",
      type: "string",
      readOnly: true,
    }),
    defineField({
      name: "consent",
      title: "Consent wording the person agreed to",
      type: "text",
      rows: 4,
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      description: "For your team's own tracking.",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Not a fit", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "receivedDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", phone: "phone", date: "submittedAt" },
    prepare: ({ title, phone, date }) => ({
      title: title || "Unnamed lead",
      subtitle: [phone, date ? new Date(date).toLocaleString("en-US") : null]
        .filter(Boolean)
        .join("  ·  "),
    }),
  },
});
