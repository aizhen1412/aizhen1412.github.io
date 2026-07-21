"""Build the site data file from the two source Word documents."""
import json
import re
from datetime import date
from pathlib import Path

from docx import Document

ROOT = Path(__file__).parent


def paragraphs(filename):
    return [p.text.strip() for p in Document(ROOT / filename).paragraphs if p.text.strip()]


def build_article():
    source = paragraphs("从打孔纸带到自然语言.docx")
    title, introduction, *body = source
    headings = {
        "用孔洞向机器传递信息",
        "机器码——计算机真正理解的语言",
        "汇编语言——给机器指令起名字",
        "高级语言——开始描述“要做什么”",
        "结构化编程——让程序更有条理",
        "面向对象——用程序模拟现实世界",
        "脚本语言和互联网——让编程更加灵活",
        "跨平台和开源生态——不再从零制造一切",
        "图形化编程——像搭积木一样写程序",
        "自然语言编程——从“写代码”到“描述需求”",
        "从人适应机器，到机器理解人",
    }
    code = {"ADD A, B", "total = price * number"}
    content = [{"type": "paragraph", "text": introduction}]
    for text in body:
        content.append({
            "type": "heading" if text in headings else "code" if text in code else "paragraph",
            "text": text,
        })
    return {
        "id": "punched-tape-to-natural-language",
        "title": title,
        "excerpt": "从打孔纸带、机器码到自然语言，回看人类如何一步步缩短与计算机之间的距离。",
        "date": str(date.today()),
        "readingTime": "约 25 分钟",
        "tags": ["技术", "编程", "人工智能"],
        "cover": "linear-gradient(135deg, #254a61 0%, #8ab0ab 100%)",
        "content": content,
    }


def build_novel():
    source = paragraphs("小说.docx")
    chapters = []
    current = None
    chapter_pattern = re.compile(r"^第([一二三四五六七八九十]+)章[　\s]*(.+)$")
    number_map = {"一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "十": 10}
    for text in source:
        match = chapter_pattern.match(text)
        if match:
            if current:
                chapters.append(current)
            current = {"number": number_map[match.group(1)], "title": match.group(2), "content": []}
        elif current:
            current["content"].append(text)
    if current:
        chapters.append(current)
    words = sum(len("".join(chapter["content"])) for chapter in chapters)
    return {
        "title": "未命名小说",
        "subtitle": "小说初稿（连载中）",
        "description": "围绕周叙的故乡、童年与记忆展开的小说初稿。",
        "status": "连载中",
        "updated": str(date.today()),
        "wordCount": f"{words / 10000:.1f} 万字",
        "cover": "linear-gradient(160deg, #243a4a 0%, #6f8c91 48%, #d4d6c8 100%)",
        "chapters": chapters,
    }


content = {
    "profile": {
        "name": "加乐 罗",
        "tagline": "写下尚未完成的故事与技术随笔。",
        "bio": "这里收录我的小说初稿，以及关于技术、语言和人与机器关系的文章。",
        "location": "中国",
        "email": "",
        "github": "https://github.com/aizhen1412",
    },
    "essays": [build_article()],
    "novel": build_novel(),
}

(ROOT / "assets" / "content.js").write_text(
    "window.SITE_CONTENT = " + json.dumps(content, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)
