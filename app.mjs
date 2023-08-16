import { listen } from "listhen";
import { createStorage } from "unstorage";
import { createStorageServer } from "unstorage/server";
import fsDriver from "unstorage/drivers/fs";

const storage = createStorage({
  driver: fsDriver({ base: "./storage" }),
});

const storageServer = createStorageServer(storage, {});

await listen(storageServer.handle, { https: false, public: true });