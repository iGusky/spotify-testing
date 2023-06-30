import useSearch from "../hooks/useSearch.ts";

test('Default values', () => {
   const {artistQuery} = useSearch()
    expect(artistQuery.value).toBe('');
});