Java.perform(function() {
    var baseAddr = Module.findBaseAddress("libil2cpp.so");
    var getBoneTransformAddr = baseAddr.add(0x75025E8); // O RVA da sua dump

    Interceptor.attach(getBoneTransformAddr, {
        onEnter: function(args) {
            var boneName = Memory.readUtf16String(args[1]);
            if (boneName === "bone_Neck" || boneName === "bone_Hips") {
                args[1] = Memory.allocUtf16String("bone_Head");
            }
        }
    });
});
