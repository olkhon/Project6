import {
    getCoordinates
} from './geonamesApi'


test("Is function undefined", async() => {
    expect(getCoordinates).toBeUndefined();
});
ön