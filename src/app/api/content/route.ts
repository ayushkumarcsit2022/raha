import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getSiteContent } from "@/lib/getContent";

const filePath = path.join(process.cwd(), "src/data/content.json");

export async function GET() {
  const content = getSiteContent();
  return NextResponse.json(content);
}

export async function POST(request: Request) {
  try {
    const newContent = await request.json();
    
    // Read current content first to merge changes cleanly
    const currentContent = getSiteContent();
    const mergedContent = {
      ...currentContent,
      ...newContent,
    };
    
    // Ensure parent directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(mergedContent, null, 2), "utf-8");
    
    return NextResponse.json({ success: true, content: mergedContent });
  } catch (error) {
    console.error("API Error writing content:", error);
    return NextResponse.json({ error: "Failed to write site content changes" }, { status: 500 });
  }
}
