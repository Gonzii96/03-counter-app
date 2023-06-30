import { test, expect, describe } from "@jest/globals";
import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroByOwner debe de retonar un arr de 3 heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    expect(heroes.length).toBe(3);
  });

  test("getHeroByOwner debe retornar un arr de 2 heroes de M.", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    // console.log(heroes);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroes.length).toBe(2);
  });
});
