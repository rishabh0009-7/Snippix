import {z} from "zod"


export const SnippetSchema = z.object ({
    title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  description: z.string().max(500, 'Description too long').optional(),
  code: z.string().min(1, 'Code is required'),
  language: z.string().min(1, 'Language is required'),
  tags: z.array(z.string()).max(10, 'Too many tags').optional(),
  category: z.string().optional(),
  isPrivate: z.boolean().optional(),
  isFavorite: z.boolean().optional(),
})


export const updateSnippetSchema = z.object ({
    title: z.string().min(1, 'Title is required').max(100, 'Title too long').optional(),
    description: z.string().max(500, 'Description too long').optional(),
    code: z.string().min(1, 'Code is required').optional(),
    language: z.string().min(1, 'Language is required').optional(),
    tags: z.array(z.string()).max(10, 'Too many tags').optional(),
    category: z.string().optional(),
    isPrivate: z.boolean().optional(),
    isFavorite: z.boolean().optional(),

})


export const createCategorySchema = z.object ({
    name: z.string().min(1, 'Name is required').max(50, 'Name too long'),
  description: z.string().max(200, 'Description too long').optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format').optional()


})