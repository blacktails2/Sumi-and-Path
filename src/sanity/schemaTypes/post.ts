// ./src/sanity/schemaTypes/post.ts
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "episode",
  type: "document",
  fields: [
    defineField({
      name: "numbering",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "speaker",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "publishedAt",
      type: "date",
    }),
    defineField({
      name: "SpotifyURL",
      type: "url",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      numbering: "numbering",
      guest: "speaker",
    },
    prepare(selection) {
      const { title, numbering, guest } = selection;
      const combined = `${numbering} - ${guest}`;
      return {
        title: title,
        subtitle: combined,
      };
    },
  },
});
