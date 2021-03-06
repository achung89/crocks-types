import Identity from "crocks/Identity";

// @dts-jest:pass:snap
Identity(5);

// @dts-jest:fail:snap
Identity(5).map("whatever");

// @dts-jest:pass:snap
Identity(5).map(() => "");

// @dts-jest:fail:snap
Identity("a string").map((v) => v * 2);

// @dts-jest:pass:snap
Identity.of("Hello");

// @dts-jest:fail:snap
Identity(5).chain("")

// @dts-jest:fail:snap
Identity(5).chain(() => 10)

// @dts-jest:pass:snap
Identity(5).chain(() => Identity(5))

// @dts-jest:fail:snap
Identity(5).ap(10)

// @dts-jest:pass:snap
Identity((a: any) => (b: any) => a + b).ap(Identity.of(10)).ap(Identity.of(10)) // ideally a and b should receive types
// @dts-jest:fail:snap
Identity(5).ap(Identity.of(10))

// @dts-jest:fail:snap
Identity.type(10) 

// @dts-jest:pass:snap
Identity.type() 

// @dts-jest:pass:snap
Identity(5).valueOf()

// @dts-jest:fail:snap
Identity(5).traverse(5, Identity)

// @dts-jest:fail:snap
Identity(5).traverse(() => 5, undefined)

// @dts-jest:pass:snap
Identity(5).sequence(Identity)

// @dts-jest:fail:snap
Identity(5).sequence(5)