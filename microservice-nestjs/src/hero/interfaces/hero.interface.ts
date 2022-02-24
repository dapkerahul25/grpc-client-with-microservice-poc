export interface HeroById {
    id: number;
}
export interface Hero {
    id: number;
    name: string;
}
export interface HeroService {

    FindOne(request: HeroById): Promise<Hero>;

}
