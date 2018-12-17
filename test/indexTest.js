const omitDeep = require("../lib/index");

describe(".omitDeep()", () => {
  it("should recursively omit key passed as a null.", () => {
    const o = omitDeep({a: null, b: "b", c: {b: null, d: "d", e: {b: null, f: "f", g: {b: "b", c: null}}}}, [null])
    expect(o).to.deep.equal({b: "b", c: { d: "d", e: { f: "f", g: {b: "b"}}}})
  })

  it("should recursively omit key passed as a undefined.", () => {
    const o = omitDeep({a: undefined, b: "b", c: {b: undefined, d: "d", e: {b: undefined, f: "f", g: {b: "b", c: undefined}}}}, [undefined])
    expect(o).to.deep.equal({b: "b", c: { d: "d", e: { f: "f", g: {b: "b"}}}})
  })

  it("should recursively omit key passed as empty string.", () => {
    const o = omitDeep({a: "", b: "b", c: {b: "", d: "d", e: {b: "", f: "f", g: {b: "b", c: ""}}}}, [""])
    expect(o).to.deep.equal({b: "b", c: { d: "d", e: { f: "f", g: {b: "b"}}}})
  })
  
  it("should recursively omit key passed as a string.", () => {
    const o = omitDeep({a: "jana", b: "b", c: {b: "jana", d: "d", e: {b: "jana", f: "f", g: {b: "b", c: "jana"}}}}, ["jana"])
    expect(o).to.deep.equal({b: "b", c: { d: "d", e: { f: "f", g: {b: "b"}}}})
  })

  it("should recursively omit keys passed as array.", () => {
    const o = omitDeep({a: null, b: "", c: {b: undefined, d: { a: "jana", b: "", c:null, e:"jana", f: "f"}}}, [null, undefined, "", "jana"])
    expect(o).to.deep.equal({ c: { d: { f: "f" } } })
  })

  it("should recursively omit key passed as a string.", () => {
    const o = omitDeep( ["a", "d", {b: "jana"}, {f: "f", g: {b: "b", c: "jana"}}], ["jana"])
    expect(o).to.deep.equal(["a", "d", {}, {f: "f", g: {b: "b"}}])
  })
  it("should recursively omit key passed as a null.", () => {
    const o = omitDeep( ["a", null, {b: null}, {f: "f", g: {b: "b", c: null}}], [null])
    expect(o).to.deep.equal(["a", {}, {f: "f", g: {b: "b"}}])
  })
  it("should recursively omit key passed as a undefined.", () => {
    const o = omitDeep( ["a", "d", {b: undefined}, {f: "f", g: {b: "b", c: undefined}}], [undefined])
    expect(o).to.deep.equal(["a", "d", {}, {f: "f", g: {b: "b"}}])
  })
  it("should recursively omit key passed as a empty string.", () => {
    const o = omitDeep( ["a", "", {b: ""}, {f: "f", g: {b: "b", c: ""}}], [""])
    expect(o).to.deep.equal(["a", {}, {f: "f", g: {b: "b"}}])
  })

  it("should recursively omit keys passed as a array.", () => {
    const o = omitDeep( [null, undefined, {b: undefined, d: { a: "jana", b: "", c:null, e:"jana", f: "f"}}] , [null, undefined, "", "jana"])
    expect(o).to.deep.equal([ { d: { f: "f" } } ])
  })

});
