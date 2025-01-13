import { useCreateEventService } from "@/http/events/use-events-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const createEventFormSchema = z.object({
  type: z.enum(["GOAL", "ASSIST", "DRIBBLE", "DISARM"]),
  playerId: z.string().nonempty("Player must be specified"),
  assistentId: z.string(),
  createdAt: z.date().default(new Date()),
});

type CreateEventFormValues = z.infer<typeof createEventFormSchema>;

export default function useCreateEventModal() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [showModal, setShowModal] = useState(true);

  const form = useForm<CreateEventFormValues>({
    resolver: zodResolver(createEventFormSchema),
  });

  const {
    mutateAsync: CreateEventService,
    isPending,
    isSuccess,
    reset,
  } = useCreateEventService();

  const onClose = useCallback(() => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("modal");
    router.replace(`${pathname}?${nextSearchParams}`);
    setShowModal(false);
  }, [pathname, router, searchParams]);

  async function onSubmit(data: CreateEventFormValues) {
    await CreateEventService(data);
    form.reset();
  }

  useEffect(() => {
    const isShowModal = searchParams.get("modal") === "create-event";
    console.log(isShowModal);

    if (isShowModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isSuccess) {
      onClose();
      reset();
    }
  }, [isSuccess, reset, onClose]);

  return {
    onClose,
    showModal,
    setShowModal,
    form,
    onSubmit,
    isPending,
  };
}
