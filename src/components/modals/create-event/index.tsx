"use client";

import { DubButton } from "@/components/ui/dub-button";
import { Form } from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import useCreateEventModal from "./use-create-event-modal";

type CreateCategoryModalProps = {
  className?: string;
};

export default function CreateCategoryModal({
  className,
}: CreateCategoryModalProps) {
  const { showModal, setShowModal, onClose, form, onSubmit, isPending } =
    useCreateEventModal();

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} onClose={onClose}>
      <div className="flex flex-col items-center justify-center space-y-2 border-b dark:border-gray-800 border-gray-200 p-4 pt-8 sm:px-16">
        <h3 className="text-lg font-medium">Criar Categoria</h3>
        <p className="text-center text-sm text-gray-500 dark:text-gray-300">
          Crie uma nova categoria para organizar os items do seu estoque.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "flex flex-col space-y-6 text-left dark:bg-neutral-900 bg-gray-50 px-4 py-8 sm:px-16",
            className
          )}
        >
          <DubButton
            type="submit"
            disabled={isPending}
            loading={isPending}
            text="Criar Categoria"
          />
        </form>
      </Form>
    </Modal>
  );
}
