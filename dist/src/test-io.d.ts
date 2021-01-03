import { Document } from 'docx';
import { RawQuillDelta, ParsedQuillDelta } from 'quilljs-parser';
declare type DocInputTest = RawQuillDelta | ParsedQuillDelta | ParsedQuillDelta[];
export declare const blank_doc_input: DocInputTest;
export declare function blankDocOutput(): Promise<Document>;
export declare const simple_paragraph_input: DocInputTest;
export declare function simpleParagraphOutput(): Promise<Document>;
export declare const multi_paragraph_input: DocInputTest;
export declare function multiParagraphOutput(): Promise<Document>;
export declare const run_formatting: DocInputTest;
export declare function runFormatting(): Promise<Document>;
export declare const hyperlinks_simple: DocInputTest;
export declare function hyperlinksSimple(): Promise<Document>;
export declare const header_simple: DocInputTest;
export declare function headerSimple(): Promise<Document>;
export declare const code_block_simple: DocInputTest;
export declare function codeblockSimple(): Promise<Document>;
export declare const block_quote_simple: DocInputTest;
export declare function blockquoteSimple(): Promise<Document>;
export declare const align_simple: DocInputTest;
export declare function alignSimple(): Promise<Document>;
export {};
//# sourceMappingURL=test-io.d.ts.map