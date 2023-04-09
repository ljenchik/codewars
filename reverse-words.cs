using System;
using System.Collections.Generic;
public static class Kata
{

    public static string Reverse( string s )
{
    char[] charArray = s.ToCharArray();
    Array.Reverse(charArray);
    return new string(charArray);
}
  public static string ReverseWords(string str)
  {
    var a = str.Split(' ');
    var b = new List<string>();
    for (var i = 0; i < a.Length; i++) {
        b.Add(Reverse(a[i]));
    }

   return (string.Join(' ', b));
  }
}

