"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  label?: string;
}

// Simple syntax highlighting for JavaScript/JSX
function highlightCode(code: string): React.ReactNode[] {
  const lines = code.split("\n");

  return lines.map((line, lineIndex) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let keyIndex = 0;

    // Patterns to match
    const patterns: {
      regex: RegExp;
      className: string;
    }[] = [
      // Comments (single line)
      { regex: /^(\/\/.*)/, className: "text-code-comment" },
      // HTML comments
      { regex: /^(<!--.*?-->)/, className: "text-code-comment" },
      // Strings (double quotes)
      { regex: /^("[^"]*")/, className: "text-code-string" },
      // Strings (single quotes)
      { regex: /^('[^']*')/, className: "text-code-string" },
      // Strings (template literals - simplified)
      { regex: /^(`[^`]*`)/, className: "text-code-string" },
      // Numbers
      { regex: /^(\b\d+\.?\d*\b)/, className: "text-code-number" },
      // Keywords
      {
        regex:
          /^(\b(?:let|const|var|function|if|else|for|while|return|true|false|class|import|export|from|default|new|this|null|undefined)\b)/,
        className: "text-code-keyword",
      },
      // Built-in objects/methods
      { regex: /^(\b(?:console|log|length)\b)/, className: "text-code-function" },
      // JSX tags
      { regex: /^(<\/?[A-Za-z][A-Za-z0-9]*\s*\/?>?)/, className: "text-code-keyword" },
      // Operators
      {
        regex: /^([+\-*/%=<>!&|]+)/,
        className: "text-foreground/80",
      },
    ];

    while (remaining.length > 0) {
      let matched = false;

      // Check for comment first (takes the whole remaining line)
      if (remaining.trimStart().startsWith("//")) {
        const leadingWhitespace = remaining.match(/^(\s*)/)?.[0] || "";
        if (leadingWhitespace) {
          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`}>{leadingWhitespace}</span>
          );
        }
        tokens.push(
          <span
            key={`${lineIndex}-${keyIndex++}`}
            className="text-code-comment"
          >
            {remaining.trimStart()}
          </span>
        );
        remaining = "";
        matched = true;
        continue;
      }

      // Check for HTML comment
      if (remaining.trimStart().startsWith("<!--")) {
        const leadingWhitespace = remaining.match(/^(\s*)/)?.[0] || "";
        if (leadingWhitespace) {
          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`}>{leadingWhitespace}</span>
          );
        }
        const commentMatch = remaining.trimStart().match(/^(<!--.*?-->)/);
        if (commentMatch) {
          tokens.push(
            <span
              key={`${lineIndex}-${keyIndex++}`}
              className="text-code-comment"
            >
              {commentMatch[1]}
            </span>
          );
          remaining = remaining
            .trimStart()
            .substring(commentMatch[1].length);
          matched = true;
          continue;
        }
      }

      for (const pattern of patterns) {
        const match = remaining.match(pattern.regex);
        if (match) {
          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`} className={pattern.className}>
              {match[1]}
            </span>
          );
          remaining = remaining.substring(match[1].length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        // Take one character as plain text
        tokens.push(
          <span key={`${lineIndex}-${keyIndex++}`}>{remaining[0]}</span>
        );
        remaining = remaining.substring(1);
      }
    }

    return (
      <div key={lineIndex} className="leading-relaxed">
        {tokens.length > 0 ? tokens : "\u00A0"}
      </div>
    );
  });
}

export function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      {label && (
        <div className="mb-2 text-sm font-medium text-muted-foreground whitespace-pre-line">
          {label}
        </div>
      )}
      <div className="relative rounded-lg bg-code-bg border border-border overflow-hidden">
        <button
          onClick={handleCopy}
          className="absolute cursor-pointer right-2 top-2 p-2 rounded-md bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-accent" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto text-sm font-mono">
          <code>{highlightCode(code)}</code>
        </pre>
      </div>
    </div>
  );
}
