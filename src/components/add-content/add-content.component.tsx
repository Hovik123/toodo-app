import {Button, FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddContentSchema, AddContentSchemaType} from "@/schema/add-content.schema";
import {useTodoStore} from "@/store/todo.store";

export const AddContent: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<AddContentSchemaType>({resolver: zodResolver(AddContentSchema)});

    const addTodo = useTodoStore((state) => state.addTodo);
    const onSubmit: SubmitHandler<AddContentSchemaType> = ({content}) => {
        addTodo(content);
        reset();
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel>Content</FormLabel>
                <Input type='text'  {...register("content")}/>
                <FormHelperText mb={5}>{errors.content && <span>{errors.content.message}</span>}</FormHelperText>
                <Button type="submit">Add new content</Button>
            </FormControl>
        </form>
    )
}
