import { NeonAuthPage } from "@/components/NeonAuthPage";
import { getPresets } from "@/lib/presets";

export default async function SignupPage() {
    const { presets } = await getPresets();
    return <NeonAuthPage view="SIGN_UP" presets={presets} />;
}
