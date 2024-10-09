import { LogLevel, ServiceLogger } from "lib";

export const appLogger = new ServiceLogger("app", LogLevel.Info);