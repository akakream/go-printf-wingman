import * as vscode from "vscode"

export function createCompletionItem(
  label: string,
  detail: string,
  documentation: string
) {
  const completion = new vscode.CompletionItem(
    label,
    vscode.CompletionItemKind.Snippet
  )
  completion.detail = detail
  completion.documentation = documentation
  completion.insertText = label.slice(1)
  return completion
}
