export interface Hero {
    name: string;
    party_buff: string;
    class: string;
    element: string;
    equipment: string;
    rarity: string;
    normal_attack: {
        title: string,
        description: string
    };
    chain_skill: {
        title: string,
        description: string
        Ailment: {
            from: string,
            to: string,
        }
    };
    special_ability: {
        title: string,
        description: string
    };
    image_urls: {
        icon: string,
        gl: string,
        jp: string,
        sc: string,
    };
}