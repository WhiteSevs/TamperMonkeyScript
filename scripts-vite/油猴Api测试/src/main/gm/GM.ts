import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { ApiTestBase } from "../ApiTestBase";
import { GM } from "ViteGM";

export class ApiTest_GM extends ApiTestBase {
	public getApiName(): string {
		return "GM";
	}
	public getAsyncApiOption(): { name: string; isSupport: boolean } | undefined {
		return void 0;
	}
	public isSupport(): boolean {
		return typeof GM === "object" && GM != null;
	}
	public getUIOption() {
		return void 0;
	}
}
