import { useUi } from "../context/UiContext";
import { InquiryForm } from "./InquiryForm";

export function InquiryModal() {
  const { inquiryOpen, setInquiryOpen } = useUi();
  if (!inquiryOpen) return null;

  return (
    <div className="modal-back" onClick={() => setInquiryOpen(false)}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <p className="kicker">Project inquiry</p>
        <h2 className="serif">Every interior starts with a conversation.</h2>
        <p style={{ color: "var(--muted)", marginBottom: 20 }}>
          Share a few details and we’ll get back with next steps.
        </p>
        <InquiryForm onDone={() => undefined} />
      </div>
    </div>
  );
}
