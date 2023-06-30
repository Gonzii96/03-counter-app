import { test, expect, describe } from "@jest/globals";

import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("pruebas en 11-async-await", () => {
  test("getImage debe retornar un URL de la imagen", async () => {
    const url = await getImagen();
    // console.log(url);

    // expect(typeof url).toBe("string");
    expect(typeof url).toBe("string");
  });
});
