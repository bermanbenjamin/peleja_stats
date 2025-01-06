import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DeletePlayerDialogProps = {
  playerId: string;
};

export function DeletePlayerDialog({ playerId }: DeletePlayerDialogProps) {
  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem Certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a remover uma categoria. Esta ação é irreversível.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              //   toast.promise(deleteCategoryService({ slug, categoryId }), {
              //     loading: "Removendo categoria...",
              //   });
            }}
            className="bg-rose-500 hover:bg-rose-600 transition-all"
          >
            Remover
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
}
