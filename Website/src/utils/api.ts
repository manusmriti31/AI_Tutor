import { Notebook } from '../types';
import { mockNotebooks } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchNotebooks(): Promise<Notebook[]> {
  // Simulate API call
  await delay(800);
  return mockNotebooks;
}

export async function fetchChapterContent(chapterId: string): Promise<string> {
  await delay(500);
  return 'Chapter content will be dynamically generated...';
}

export async function getRecommendations(userId: string): Promise<Notebook[]> {
  await delay(1000);
  // Return a subset of notebooks as recommendations
  return mockNotebooks.slice(0, 2);
}