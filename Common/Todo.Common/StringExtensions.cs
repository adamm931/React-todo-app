namespace Todo.Common
{
    public static class StringExtensions
    {
        public static string Format(this string template, params object[] @params)
            => string.Format(template, @params);
    }
}
