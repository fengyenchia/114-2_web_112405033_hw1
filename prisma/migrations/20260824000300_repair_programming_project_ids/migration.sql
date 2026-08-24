UPDATE "ProgrammingProjects"
SET "id" = gen_random_uuid()::text
WHERE "id" IS NULL OR btrim("id") = '';

ALTER TABLE "ProgrammingProjects"
ALTER COLUMN "id" SET DEFAULT gen_random_uuid()::text;

CREATE OR REPLACE FUNCTION public.assign_programming_projects_id()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW."id" IS NULL OR btrim(NEW."id") = '' THEN
    NEW."id" := gen_random_uuid()::text;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS programming_projects_assign_id ON "ProgrammingProjects";

CREATE TRIGGER programming_projects_assign_id
BEFORE INSERT OR UPDATE OF "id" ON "ProgrammingProjects"
FOR EACH ROW
EXECUTE FUNCTION public.assign_programming_projects_id();