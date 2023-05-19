export interface DateEntryProps {
    inputDay: (date: string) => void;
}

export interface TextContainerProps {
    explanation: string;
    imageAuthor: string;
    imageDate: string;
    imageType: string;
    site: string;
}

export interface TitleContainerProps {
    imageTitle: string;
}

export interface MediaProps {
    imageType: string;
    imageEntry: string;
    title: string;
}

export interface AlertProps {
    title: string;
    text: string;
}
