import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * One document type: "Blog Post".
 * The client fills in 6 boxes, presses Publish, and the post appears on the website.
 */
export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web address",
      description: "Click Generate — it is made from the title. This becomes the link of the post.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category (optional)",
      description: 'A short label shown on the post, e.g. "Homecare".',
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main picture",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Describe the picture (for accessibility & Google)",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Short summary",
      description: "1–2 sentences. Shown on the blog page and in Google results.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "body",
      title: "Article",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "block",
          // Only what the website can show: normal text and one heading size.
          styles: [
            { title: "Normal text", value: "normal" },
            { title: "Heading", value: "h2" },
          ],
          lists: [
            { title: "Bullet list", value: "bullet" },
            { title: "Numbered list", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "Link address",
                    validation: (rule) =>
                      rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Describe the picture", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", date: "publishedAt", media: "mainImage" },
    prepare: ({ title, date, media }) => ({
      title,
      subtitle: date ? new Date(date).toLocaleDateString("en-US", { dateStyle: "long" }) : "No date",
      media,
    }),
  },
});
