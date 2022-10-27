export type MenuTypes = {
    id: number;
    title: string;
    img: string;
    link?: string;
    innerMenuData?: MenuTypes[];
}