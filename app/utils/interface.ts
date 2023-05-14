export interface DateEntryProps {
    inputDay: (date: string) => void;
}

export interface TextContainerProps {
    explanation: string;
    imageAuthor: string;
    imageDate: string;
    site: string;
}

export interface TitleContainerProps {
    imageTitle: string;
}

export interface MediaProps {
    image: string;
    imageEntry: string;
    title: string;
}

export interface AlertProps {
    title: string;
    text: string;
}
