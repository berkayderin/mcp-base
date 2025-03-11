import { createClient } from '../supabase/client';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  slug: string;
  created_date: string;
}

export async function getAllBlogPosts() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('id', { ascending: false })
    .limit(100);

  if (error) {
    return null;
  }

  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string) {
  const supabase = createClient();

  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();

  if (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }

  return data as BlogPost;
}
