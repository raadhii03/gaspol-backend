import * as runtime from "@prisma/client/runtime/client";
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Spbu {\n  id        Int      @id @default(autoincrement())\n  nama      String\n  alamat    String\n  kota      String\n  latitude  Float\n  longitude Float\n  status    Boolean\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Spbu\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"alamat\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kota\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"longitude\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Spbu.findUnique\",\"Spbu.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Spbu.findFirst\",\"Spbu.findFirstOrThrow\",\"Spbu.findMany\",\"data\",\"Spbu.createOne\",\"Spbu.createMany\",\"Spbu.createManyAndReturn\",\"Spbu.updateOne\",\"Spbu.updateMany\",\"Spbu.updateManyAndReturn\",\"create\",\"update\",\"Spbu.upsertOne\",\"Spbu.deleteOne\",\"Spbu.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Spbu.groupBy\",\"Spbu.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"nama\",\"alamat\",\"kota\",\"latitude\",\"longitude\",\"status\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "OQsQDBwAACoAMB0AAAQAEB4AACoAMB8CAAAAASABACwAISEBACwAISIBACwAISMIAC0AISQIAC0AISUgAC4AISZAAC8AISdAAC8AIQEAAAABACABAAAAAQAgDBwAACoAMB0AAAQAEB4AACoAMB8CACsAISABACwAISEBACwAISIBACwAISMIAC0AISQIAC0AISUgAC4AISZAAC8AISdAAC8AIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAJHwIAAAABIAEAAAABIQEAAAABIgEAAAABIwgAAAABJAgAAAABJSAAAAABJkAAAAABJ0AAAAABAQgAAAkAIAkfAgAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjCAAAAAEkCAAAAAElIAAAAAEmQAAAAAEnQAAAAAEBCAAACwAwAQgAAAsAMAkfAgA5ACEgAQA1ACEhAQA1ACEiAQA1ACEjCAA2ACEkCAA2ACElIAA3ACEmQAA4ACEnQAA4ACECAAAAAQAgCAAADgAgCR8CADkAISABADUAISEBADUAISIBADUAISMIADYAISQIADYAISUgADcAISZAADgAISdAADgAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAADAAIBYAADEAIBcAADQAIBgAADMAIBkAADIAIAwcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjCAAdACEkCAAdACElIAAeACEmQAAfACEnQAAfACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAwcAAAaADAdAAAXABAeAAAaADAfAgAbACEgAQAcACEhAQAcACEiAQAcACEjCAAdACEkCAAdACElIAAeACEmQAAfACEnQAAfACENFQAAIQAgFgAAJgAgFwAAIQAgGAAAIQAgGQAAIQAgKAIAAAABKQIAAAAEKgIAAAAEKwIAAAABLAIAAAABLQIAAAABLgIAAAABLwIAKQAhDhUAACEAIBgAACgAIBkAACgAICgBAAAAASkBAAAABCoBAAAABCsBAAAAASwBAAAAAS0BAAAAAS4BAAAAAS8BACcAITABAAAAATEBAAAAATIBAAAAAQ0VAAAhACAWAAAmACAXAAAmACAYAAAmACAZAAAmACAoCAAAAAEpCAAAAAQqCAAAAAQrCAAAAAEsCAAAAAEtCAAAAAEuCAAAAAEvCAAlACEFFQAAIQAgGAAAJAAgGQAAJAAgKCAAAAABLyAAIwAhCxUAACEAIBgAACIAIBkAACIAIChAAAAAASlAAAAABCpAAAAABCtAAAAAASxAAAAAAS1AAAAAAS5AAAAAAS9AACAAIQsVAAAhACAYAAAiACAZAAAiACAoQAAAAAEpQAAAAAQqQAAAAAQrQAAAAAEsQAAAAAEtQAAAAAEuQAAAAAEvQAAgACEIKAIAAAABKQIAAAAEKgIAAAAEKwIAAAABLAIAAAABLQIAAAABLgIAAAABLwIAIQAhCChAAAAAASlAAAAABCpAAAAABCtAAAAAASxAAAAAAS1AAAAAAS5AAAAAAS9AACIAIQUVAAAhACAYAAAkACAZAAAkACAoIAAAAAEvIAAjACECKCAAAAABLyAAJAAhDRUAACEAIBYAACYAIBcAACYAIBgAACYAIBkAACYAICgIAAAAASkIAAAABCoIAAAABCsIAAAAASwIAAAAAS0IAAAAAS4IAAAAAS8IACUAIQgoCAAAAAEpCAAAAAQqCAAAAAQrCAAAAAEsCAAAAAEtCAAAAAEuCAAAAAEvCAAmACEOFQAAIQAgGAAAKAAgGQAAKAAgKAEAAAABKQEAAAAEKgEAAAAEKwEAAAABLAEAAAABLQEAAAABLgEAAAABLwEAJwAhMAEAAAABMQEAAAABMgEAAAABCygBAAAAASkBAAAABCoBAAAABCsBAAAAASwBAAAAAS0BAAAAAS4BAAAAAS8BACgAITABAAAAATEBAAAAATIBAAAAAQ0VAAAhACAWAAAmACAXAAAhACAYAAAhACAZAAAhACAoAgAAAAEpAgAAAAQqAgAAAAQrAgAAAAEsAgAAAAEtAgAAAAEuAgAAAAEvAgApACEMHAAAKgAwHQAABAAQHgAAKgAwHwIAKwAhIAEALAAhIQEALAAhIgEALAAhIwgALQAhJAgALQAhJSAALgAhJkAALwAhJ0AALwAhCCgCAAAAASkCAAAABCoCAAAABCsCAAAAASwCAAAAAS0CAAAAAS4CAAAAAS8CACEAIQsoAQAAAAEpAQAAAAQqAQAAAAQrAQAAAAEsAQAAAAEtAQAAAAEuAQAAAAEvAQAoACEwAQAAAAExAQAAAAEyAQAAAAEIKAgAAAABKQgAAAAEKggAAAAEKwgAAAABLAgAAAABLQgAAAABLggAAAABLwgAJgAhAiggAAAAAS8gACQAIQgoQAAAAAEpQAAAAAQqQAAAAAQrQAAAAAEsQAAAAAEtQAAAAAEuQAAAAAEvQAAiACEAAAAAAAEzAQAAAAEFMwgAAAABNAgAAAABNQgAAAABNggAAAABNwgAAAABATMgAAAAAQEzQAAAAAEFMwIAAAABNAIAAAABNQIAAAABNgIAAAABNwIAAAABAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
export function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map