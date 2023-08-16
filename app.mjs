import { listen } from "listhen";
import { createStorage } from "unstorage";
import { createStorageServer } from "unstorage/server";

const storage = createStorage();
const storageServer = createStorageServer(storage, {});

await listen(storageServer.handle);