import { NeonAuthPage } from "@/components/NeonAuthPage";
import { getPresets } from "@/lib/presets";

export default async function SigninPage() {
    const { presets } = await getPresets();
    return <NeonAuthPage view="SIGN_IN" presets={presets} />;
}
